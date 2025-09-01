import React, { useState, useRef, useEffect, useCallback } from 'react'
import { X, Send, Camera, Mic, Trash2 } from 'lucide-react'
import { ChatEmbedProps, ChatMessage, MediaFile } from '../types'
import { MessageBubble } from './MessageBubble'
import { TypingIndicator } from './TypingIndicator'
import { FileUpload } from './FileUpload'
import { MediaPreview } from './MediaPreview'
import { ToggleButton } from './ToggleButton'
import { useDeviceDetection } from '../hooks'

export const ChatEmbed: React.FC<ChatEmbedProps> = ({
  config,
  onMessage,
  onError,
  onClose
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(config.initialState !== 'closed')
  const [pendingFiles, setPendingFiles] = useState<MediaFile[]>([])
  const [sessionId] = useState(() => {
    let id = localStorage.getItem('n8n_session_id')
    if (!id) {
      id = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
      localStorage.setItem('n8n_session_id', id)
    }
    return id
  })
  
  // Camera and audio state
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const [recordingTime, setRecordingTime] = useState(0)
  const [recordingInterval, setRecordingInterval] = useState<NodeJS.Timeout | null>(null)
  
  const deviceInfo = useDeviceDetection()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Configuration merging (needs to be before effects)
  const defaultConfig = {
    title: 'Chat',
    subtitle: 'How can I help you?',
    placeholder: 'Type your message...',
    theme: 'light' as const,
    colors: {
      primary: '#007bff',
      background: '#ffffff',
      userBubble: '#007bff',
      botBubble: '#f1f3f4',
      text: '#333333'
    },
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    showTypingIndicator: true,
    showTimestamps: false,
    position: 'bottom-right' as const,
    width: 350,
    height: 500,
    zIndex: 1000,
    initialState: 'open' as const,
    showToggleButton: false,
    popupMessage: 'How can I help you?',
    enableFileUpload: false,
    enableCamera: false,
    enableAudio: false,
    maxFileSize: 10,
    maxFiles: 5,
    allowedFileTypes: []
  }

  const mergedConfig = { ...defaultConfig, ...config }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView()
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Auto-focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }, 100)
      
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const generateId = () => `${Date.now()}-${Math.random()}`

  const sendToN8n = async (message: string, media?: MediaFile) => {
    try {
      if (media) {
        // Send with media as FormData
        const formData = new FormData()
        formData.append('sessionId', sessionId)
        formData.append('chatInput', message)
        formData.append('data', media.file)

        const response = await fetch(config.n8nWebhookUrl, {
          method: 'POST',
          body: formData
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        return result.output || result.response || result.message || result.text || 'Response received'
      } else {
        // Send as JSON (original behavior)
        const payload = {
          sessionId: sessionId,
          chatInput: message
        }

        const response = await fetch(config.n8nWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        return result.output || result.response || result.message || result.text || 'Response received'
      }
    } catch (error) {
      console.error('Error sending to n8n:', error)
      throw error
    }
  }

  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim() && pendingFiles.length === 0) return
    if (isLoading) return

    // Mark popup as shown when user sends a message
    sessionStorage.setItem('n8n-chat-popup-shown', 'true')

    const messageContent = inputValue.trim() || ''
    const filesToSend = [...pendingFiles]
    
    setInputValue('')
    setPendingFiles([])
    setIsLoading(true)
    
    if (config.showTypingIndicator) {
      setIsTyping(true)
    }

    try {
      // Send each media file as a separate message
      for (let i = 0; i < filesToSend.length; i++) {
        const file = filesToSend[i]
        const isLastFile = i === filesToSend.length - 1
        const caption = isLastFile && messageContent ? messageContent : ''
        
        // Create user message for this media
        const userMessage: ChatMessage = {
          id: generateId(),
          type: 'user',
          content: caption,
          timestamp: new Date(),
          files: [file]
        }

        setMessages(prev => [...prev, userMessage])
        onMessage?.(userMessage)

        // Send to n8n
        const response = await sendToN8n(caption, file)
        
        const botMessage: ChatMessage = {
          id: generateId(),
          type: 'bot',
          content: response,
          timestamp: new Date()
        }

        setMessages(prev => [...prev, botMessage])
        onMessage?.(botMessage)
      }

      // If there's text but no files, send text-only message
      if (messageContent && filesToSend.length === 0) {
        const userMessage: ChatMessage = {
          id: generateId(),
          type: 'user',
          content: messageContent,
          timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        onMessage?.(userMessage)

        const response = await sendToN8n(messageContent)
        
        const botMessage: ChatMessage = {
          id: generateId(),
          type: 'bot',
          content: response,
          timestamp: new Date()
        }

        setMessages(prev => [...prev, botMessage])
        onMessage?.(botMessage)
      }
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: generateId(),
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorMessage])
      onError?.(error as Error)
    } finally {
      setIsLoading(false)
      setIsTyping(false)
      // Clean up file URLs
      filesToSend.forEach(file => URL.revokeObjectURL(file.url))
    }
  }, [inputValue, pendingFiles, isLoading, config, onMessage, onError])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleFilesSelected = useCallback((files: MediaFile[]) => {
    setPendingFiles(prev => {
      const newFiles = [...prev, ...files]
      return newFiles.slice(0, mergedConfig.maxFiles)
    })
  }, [mergedConfig.maxFiles])

  const handleRemoveFile = useCallback((fileId: string) => {
    setPendingFiles(prev => {
      const fileToRemove = prev.find(f => f.id === fileId)
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.url)
      }
      return prev.filter(f => f.id !== fileId)
    })
  }, [])

  // Camera functionality with all permission checks
  const openCamera = async () => {
    console.log('📷 Opening camera...')
    
    // Check if camera APIs are supported
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('❌ getUserMedia not supported')
      alert('Camera is not supported in this browser.')
      return
    }
    
    // Arc browser specific checks and workarounds
    if (deviceInfo.isArc) {
      console.log('🌐 Arc browser detected - applying compatibility fixes...')
      try {
        const constraints = { video: { facingMode: 'user' } }
        console.log('🔧 Arc: Using enhanced video constraints')
        
        if (navigator.permissions) {
          const cameraPermission = await navigator.permissions.query({ name: 'camera' as PermissionName })
          if (cameraPermission.state === 'denied') {
            alert('Camera access is blocked in Arc. Please:\n1. Click the shield icon in the address bar\n2. Allow camera access\n3. Refresh the page')
            return
          }
        }
      } catch (e) {
        console.log('🔧 Arc: Could not check permissions, continuing...')
      }
    }

    // Check if we're on HTTPS or localhost (required for camera access)
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
      console.error('❌ Camera requires HTTPS')
      alert('Camera access requires HTTPS. Please use a secure connection.')
      return
    }

    try {
      console.log('🔍 Checking camera permissions...')
      
      if (navigator.permissions) {
        try {
          const permission = await navigator.permissions.query({ name: 'camera' as PermissionName })
          console.log('📋 Camera permission state:', permission.state)
          
          if (permission.state === 'denied') {
            alert('Camera permission is denied. Please enable camera access in your browser settings and reload the page.')
            return
          }
        } catch (permError) {
          console.log('⚠️ Could not check permissions:', permError)
        }
      }

      console.log('🎥 Requesting camera access...')
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'user'
        } 
      })
      
      console.log('✅ Camera access granted, stream:', stream)
      
      if (videoRef.current) {
        console.log('📹 Setting up video element...')
        videoRef.current.srcObject = stream
        videoRef.current.autoplay = true
        videoRef.current.playsInline = true
        videoRef.current.muted = true
        
        videoRef.current.onloadedmetadata = () => {
          console.log('📹 Video metadata loaded')
          if (videoRef.current) {
            videoRef.current.play()
              .then(() => {
                console.log('▶️ Video playing successfully')
                setIsCameraOpen(true)
              })
              .catch((playError) => {
                console.error('❌ Error playing video:', playError)
                alert('Could not start camera preview. Please try again.')
              })
          }
        }
      }
    } catch (error) {
      console.error('❌ Error accessing camera:', error)
      const err = error as any
      
      if (err.name === 'NotAllowedError') {
        alert('Camera permission denied. Please:\n1. Click "Allow" when prompted\n2. Check your browser settings\n3. Reload the page and try again')
      } else if (err.name === 'NotFoundError') {
        alert('No camera found. Please:\n1. Connect a camera\n2. Check camera connections\n3. Try again')
      } else if (err.name === 'NotReadableError') {
        alert('Camera is already in use by another application. Please:\n1. Close other camera apps\n2. Try again')
      } else {
        alert(`Camera error: ${err.message || 'Unknown error'}\n\nPlease:\n1. Allow camera permissions\n2. Use HTTPS\n3. Try a different browser`)
      }
    }
  }

  const capturePhoto = async () => {
    if (!videoRef.current || !canvasRef.current) return

    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    if (!context) return

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    context.drawImage(video, 0, 0)

    canvas.toBlob(async (blob) => {
      if (blob) {
        const file = new File([blob], `photo-${Date.now()}.jpg`, { type: 'image/jpeg' })
        try {
          const mediaFile = await createMediaFile(file)
          handleFilesSelected([mediaFile])
        } catch (error) {
          console.error('Error processing captured photo:', error)
          alert('Error processing captured photo')
        }
      }
    }, 'image/jpeg', 0.8)

    closeCamera()
  }

  const closeCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach(track => track.stop())
      videoRef.current.srcObject = null
    }
    setIsCameraOpen(false)
  }

  // Audio recording functionality with all permission checks
  const startRecording = async () => {
    console.log('🎤 Starting audio recording...')
    
    if (!MediaRecorder || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('❌ MediaRecorder or getUserMedia not supported')
      alert('Audio recording is not supported in this browser.')
      return
    }
    
    if (deviceInfo.isArc) {
      console.log('🌐 Arc browser detected - using enhanced audio recording...')
      
      try {
        if (navigator.permissions) {
          const micPermission = await navigator.permissions.query({ name: 'microphone' as PermissionName })
          if (micPermission.state === 'denied') {
            alert('Microphone access is blocked in Arc. Please:\n1. Click the shield icon in the address bar\n2. Allow microphone access\n3. Refresh the page')
            return
          }
        }
      } catch (e) {
        console.log('🔧 Arc: Could not check microphone permissions, continuing...')
      }
    }

    try {
      console.log('🔍 Requesting microphone permission...')
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        } 
      })
      
      console.log('✅ Microphone access granted')
      
      let recorderOptions: MediaRecorderOptions = {}
      if (deviceInfo.isArc) {
        if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
          recorderOptions.mimeType = 'audio/webm;codecs=opus'
        } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
          recorderOptions.mimeType = 'audio/mp4'
        }
      } else {
        if (MediaRecorder.isTypeSupported('audio/webm')) {
          recorderOptions.mimeType = 'audio/webm'
        }
      }
      
      const recorder = new MediaRecorder(stream, recorderOptions)
      const chunks: Blob[] = []

      recorder.ondataavailable = (event) => {
        console.log('📊 Audio data available:', event.data.size, 'bytes')
        if (event.data.size > 0) {
          chunks.push(event.data)
        }
      }

      recorder.onstop = async () => {
        console.log('🛑 Recording stopped, creating file...')
        const mimeType = recorder.mimeType || 'audio/wav'
        const blob = new Blob(chunks, { type: mimeType })
        const extension = mimeType.includes('webm') ? 'webm' : 'wav'
        const file = new File([blob], `recording-${Date.now()}.${extension}`, { type: mimeType })
        
        console.log('📁 Created audio file:', file.name, file.size, 'bytes')
        try {
          const mediaFile = await createMediaFile(file)
          
          // Mark popup as shown when user sends a message
          sessionStorage.setItem('n8n-chat-popup-shown', 'true')
          
          // Send audio recording directly
          setIsLoading(true)
          if (config.showTypingIndicator) {
            setIsTyping(true)
          }
          
          const userMessage: ChatMessage = {
            id: generateId(),
            type: 'user',
            content: '',
            files: [mediaFile],
            timestamp: new Date()
          }
          
          setMessages(prev => [...prev, userMessage])
          
          // Send via webhook
          const formData = new FormData()
          formData.append('sessionId', sessionId)
          formData.append('chatInput', '')
          formData.append('data', mediaFile.file)
          
          const response = await fetch(config.n8nWebhookUrl, {
            method: 'POST',
            body: formData
          })
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          
          const result = await response.json()
          const botResponse = result.output || result.response || result.message || result.text || 'Response received'
          
          const botMessage: ChatMessage = {
            id: generateId(),
            type: 'bot',
            content: botResponse,
            timestamp: new Date()
          }
          
          setMessages(prev => [...prev, botMessage])
          
        } catch (error) {
          console.error('Error processing audio recording:', error)
          alert('Error processing audio recording')
        } finally {
          setIsLoading(false)
          setIsTyping(false)
        }
        
        stream.getTracks().forEach(track => track.stop())
      }

      recorder.onerror = (event) => {
        console.error('❌ Recording error:', event)
        alert('Recording failed. Please try again.')
      }

      recorder.start(1000)
      setMediaRecorder(recorder)
      setIsRecording(true)
      setRecordingTime(0)
      
      console.log('🔴 Recording started')

      const interval = setInterval(() => {
        setRecordingTime(prev => prev + 1)
      }, 1000)
      setRecordingInterval(interval)

    } catch (error) {
      console.error('❌ Error accessing microphone:', error)
      const err = error as any
      if (err.name === 'NotAllowedError') {
        alert('Microphone permission denied. Please allow microphone access and try again.')
      } else if (err.name === 'NotFoundError') {
        alert('No microphone found. Please connect a microphone and try again.')
      } else {
        alert(`Could not access microphone: ${err.message || 'Unknown error'}`)
      }
    }
  }

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop()
    }
    
    setIsRecording(false)
    setMediaRecorder(null)
    
    if (recordingInterval) {
      clearInterval(recordingInterval)
      setRecordingInterval(null)
    }
  }

  const cancelRecording = () => {
    // Stop recording without saving
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      // Remove the onstop handler to prevent file creation
      mediaRecorder.onstop = null
      mediaRecorder.stop()
      
      // Stop all tracks
      if (mediaRecorder.stream) {
        mediaRecorder.stream.getTracks().forEach(track => track.stop())
      }
    }
    
    setIsRecording(false)
    setMediaRecorder(null)
    
    if (recordingInterval) {
      clearInterval(recordingInterval)
      setRecordingInterval(null)
    }
    
    setRecordingTime(0)
  }

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Helper function to create MediaFile (moved from FileUpload)
  const createMediaFile = async (file: File): Promise<MediaFile> => {
    const generateId = () => `${Date.now()}-${Math.random()}`
    
    const getFileType = (file: File): 'image' | 'video' | 'audio' | 'document' => {
      if (file.type.startsWith('image/')) return 'image'
      if (file.type.startsWith('video/')) return 'video'
      if (file.type.startsWith('audio/')) return 'audio'
      return 'document'
    }

    return {
      file: file,
      id: generateId(),
      type: getFileType(file),
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size
    }
  }

  const handleToggle = useCallback(() => {
    setIsOpen(prev => {
      const newState = !prev
      // If closing the chat, call the onClose callback
      if (!newState && onClose) {
        onClose()
      }
      return newState
    })
  }, [onClose])

  // Handle initial state for floating widgets
  const shouldShowToggleButton = mergedConfig.position !== 'inline' && mergedConfig.showToggleButton
  const isInline = mergedConfig.position === 'inline'


  // Camera modal (shared between both return paths)
  const cameraModal = isCameraOpen && (
    <div className="camera-modal">
      <div className="camera-container">
        <video ref={videoRef} autoPlay playsInline className="camera-video" />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        <div className="camera-controls">
          <button onClick={capturePhoto} className="capture-button">
            <Camera size={24} />
          </button>
          <button onClick={closeCamera} className="close-camera-button">
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )

  // For floating widgets, we need a container to position both toggle and chat together
  if (shouldShowToggleButton) {
    return (
      <>
        {cameraModal}
        <div className={`chat-widget-container chat-widget-container--${mergedConfig.position}${!isOpen ? ' chat-closed' : ''}`}>
          {/* Toggle Button for floating widgets */}
          <ToggleButton
          isOpen={isOpen}
          onClick={handleToggle}
          position={mergedConfig.position as 'bottom-right' | 'bottom-left'}
          primaryColor={mergedConfig.colors.primary || '#007bff'}
          popupMessage={mergedConfig.popupMessage}
        />

        {/* Main Chat Interface */}
        {isOpen && (
          <div 
            ref={chatContainerRef}
            className={`chat-embed chat-embed--${mergedConfig.theme} chat-embed--${mergedConfig.position}${
              deviceInfo.isMobile ? ' chat-embed--mobile' : ''
            } chat-embed--open`}
            style={{
              '--chat-primary': mergedConfig.colors.primary,
              '--chat-background': mergedConfig.colors.background,
              '--chat-user-bubble': mergedConfig.colors.userBubble,
              '--chat-bot-bubble': mergedConfig.colors.botBubble,
              '--chat-text': mergedConfig.colors.text,
              '--chat-font-family': mergedConfig.fontFamily,
              '--chat-width': `${mergedConfig.width}px`,
              '--chat-height': `${mergedConfig.height}px`,
              zIndex: mergedConfig.zIndex
            } as React.CSSProperties}
          >
      <div className="chat-embed__header">
        <div className="chat-embed__header-content">
          <h3 className="chat-embed__title">{mergedConfig.title}</h3>
          {mergedConfig.subtitle && (
            <p className="chat-embed__subtitle">{mergedConfig.subtitle}</p>
          )}
        </div>
        {mergedConfig.position !== 'inline' && (
          <button 
            className="chat-embed__close-button"
            onClick={handleToggle}
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <div className="chat-embed__messages">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            showTimestamp={mergedConfig.showTimestamps}
          />
        ))}
        <TypingIndicator visible={isTyping} />
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-embed__input-area">
        {/* Media Preview */}
        {pendingFiles.length > 0 && (
          <MediaPreview
            files={pendingFiles}
            onRemoveFile={handleRemoveFile}
          />
        )}

        <div className={`chat-embed__input-row ${isRecording ? 'chat-embed__input-row--recording' : ''}`}>
          {isRecording ? (
            <>
              {/* Recording mode: Trash, Time, Send */}
              <button
                onClick={cancelRecording}
                className="upload-button"
                title="Stop and discard recording"
                disabled={isLoading}
              >
                <Trash2 size={18} />
              </button>
              
              <div className="recording-time-display">
                <div className="recording-indicator" />
                {formatTime(recordingTime)}
              </div>
              
              <button
                className="chat-embed__send-button"
                onClick={stopRecording}
                disabled={isLoading}
                title="Stop recording and send"
              >
                <Send size={18} className="chat-embed__send-icon" />
              </button>
            </>
          ) : (
            <>
              {/* Normal mode: Attach, Input, Buttons */}
              {mergedConfig.enableFileUpload && (
                <FileUpload
                  onFilesSelected={handleFilesSelected}
                  maxFiles={mergedConfig.maxFiles}
                  maxFileSize={mergedConfig.maxFileSize}
                  allowedTypes={mergedConfig.allowedFileTypes}
                />
              )}
              
              <textarea
                ref={inputRef}
                className="chat-embed__input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={mergedConfig.placeholder}
                disabled={isLoading}
                rows={1}
                style={{ resize: 'none' }}
              />
              
              {inputValue.trim() || pendingFiles.length > 0 ? (
                <button
                  className="chat-embed__send-button"
                  onClick={handleSendMessage}
                  disabled={isLoading || (!inputValue.trim() && pendingFiles.length === 0)}
                >
                  {isLoading ? (
                    <div className="chat-embed__loading-spinner" />
                  ) : (
                    <Send size={18} className="chat-embed__send-icon" />
                  )}
                </button>
              ) : (
                <>
                  {mergedConfig.enableCamera && false && (
                    <button
                      onClick={openCamera}
                      className="upload-button"
                      title="Take photo"
                      disabled={isLoading}
                    >
                      <Camera size={18} />
                    </button>
                  )}
                  
                  {mergedConfig.enableAudio && (
                    <button
                      onClick={startRecording}
                      className="upload-button"
                      title="Record audio"
                      disabled={isLoading}
                    >
                      <Mic size={18} />
                    </button>
                  )}
                </>
              )}
            </>
          )}
        </div>
        </div>
        </div>
        )}
        </div>
      </>
    )
  }

  // For inline widgets, return the chat interface directly
  return (
    <>
      {cameraModal}
      <div 
        ref={chatContainerRef}
        className={`chat-embed chat-embed--${mergedConfig.theme} chat-embed--${mergedConfig.position}${
          deviceInfo.isMobile ? ' chat-embed--mobile' : ''
        }`}
      style={{
        '--chat-primary': mergedConfig.colors.primary,
        '--chat-background': mergedConfig.colors.background,
        '--chat-user-bubble': mergedConfig.colors.userBubble,
        '--chat-bot-bubble': mergedConfig.colors.botBubble,
        '--chat-text': mergedConfig.colors.text,
        '--chat-font-family': mergedConfig.fontFamily,
        '--chat-width': `${mergedConfig.width}px`,
        '--chat-height': `${mergedConfig.height}px`,
        zIndex: mergedConfig.zIndex
      } as React.CSSProperties}
    >
      <div className="chat-embed__header">
        <div className="chat-embed__header-content">
          <h3 className="chat-embed__title">{mergedConfig.title}</h3>
          {mergedConfig.subtitle && (
            <p className="chat-embed__subtitle">{mergedConfig.subtitle}</p>
          )}
        </div>
        {mergedConfig.position !== 'inline' && (
          <button 
            className="chat-embed__close-button"
            onClick={handleToggle}
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <div className="chat-embed__messages">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            showTimestamp={mergedConfig.showTimestamps}
          />
        ))}
        <TypingIndicator visible={isTyping} />
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-embed__input-area">
        {/* Media Preview */}
        {pendingFiles.length > 0 && (
          <MediaPreview
            files={pendingFiles}
            onRemoveFile={handleRemoveFile}
          />
        )}

        <div className={`chat-embed__input-row ${isRecording ? 'chat-embed__input-row--recording' : ''}`}>
          {isRecording ? (
            <>
              {/* Recording mode: Trash, Time, Send */}
              <button
                onClick={cancelRecording}
                className="upload-button"
                title="Stop and discard recording"
                disabled={isLoading}
              >
                <Trash2 size={18} />
              </button>
              
              <div className="recording-time-display">
                <div className="recording-indicator" />
                {formatTime(recordingTime)}
              </div>
              
              <button
                className="chat-embed__send-button"
                onClick={stopRecording}
                disabled={isLoading}
                title="Stop recording and send"
              >
                <Send size={18} className="chat-embed__send-icon" />
              </button>
            </>
          ) : (
            <>
              {/* Normal mode: Attach, Input, Buttons */}
              {mergedConfig.enableFileUpload && (
                <FileUpload
                  onFilesSelected={handleFilesSelected}
                  maxFiles={mergedConfig.maxFiles}
                  maxFileSize={mergedConfig.maxFileSize}
                  allowedTypes={mergedConfig.allowedFileTypes}
                />
              )}
              
              <textarea
                ref={inputRef}
                className="chat-embed__input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={mergedConfig.placeholder}
                disabled={isLoading}
                rows={1}
                style={{ resize: 'none' }}
              />
              
              {inputValue.trim() || pendingFiles.length > 0 ? (
                <button
                  className="chat-embed__send-button"
                  onClick={handleSendMessage}
                  disabled={isLoading || (!inputValue.trim() && pendingFiles.length === 0)}
                >
                  {isLoading ? (
                    <div className="chat-embed__loading-spinner" />
                  ) : (
                    <Send size={18} className="chat-embed__send-icon" />
                  )}
                </button>
              ) : (
                <>
                  {mergedConfig.enableCamera && false && (
                    <button
                      onClick={openCamera}
                      className="upload-button"
                      title="Take photo"
                      disabled={isLoading}
                    >
                      <Camera size={18} />
                    </button>
                  )}
                  
                  {mergedConfig.enableAudio && (
                    <button
                      onClick={startRecording}
                      className="upload-button"
                      title="Record audio"
                      disabled={isLoading}
                    >
                      <Mic size={18} />
                    </button>
                  )}
                </>
              )}
            </>
          )}
        </div>
        </div>
      </div>
    </>
  )
}