export interface ChatMessage {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
  files?: MediaFile[]
  suggestions?: string[]
}

export interface ChatConfig {
  n8nWebhookUrl: string
  title?: string
  subtitle?: string
  placeholder?: string
  theme?: 'light' | 'dark' | 'auto'
  colors?: {
    primary?: string
    background?: string
    userBubble?: string
    botBubble?: string
    text?: string
  }
  fontFamily?: string
  showTypingIndicator?: boolean
  showTimestamps?: boolean
  position?: 'bottom-right' | 'bottom-left' | 'inline'
  width?: number
  height?: number
  zIndex?: number
  // Toggle functionality
  initialState?: 'open' | 'closed'
  showToggleButton?: boolean
  popupMessage?: string
  // Media upload functionality
  enableFileUpload?: boolean
  enableCamera?: boolean
  enableAudio?: boolean
  maxFileSize?: number // in MB
  maxFiles?: number
  allowedFileTypes?: string[]
  enableUserInfo?: boolean
  userInfoRequiredFields?: ('name' | 'email' | 'phone')[]
}

export interface ChatEmbedProps {
  config: ChatConfig
  onMessage?: (message: ChatMessage) => void
  onError?: (error: Error) => void
  onClose?: () => void
}

export interface TypingIndicatorProps {
  visible: boolean
}

export interface MessageBubbleProps {
  message: ChatMessage
  showTimestamp?: boolean
}

export interface MediaFile {
  file: File
  id: string
  type: 'image' | 'video' | 'audio' | 'document'
  url: string
  name: string
  size: number
}

export interface FileUploadProps {
  onFilesSelected: (files: MediaFile[]) => void
  maxFiles: number
  maxFileSize: number
  allowedTypes: string[]
}

export interface MediaPreviewProps {
  files: MediaFile[]
  onRemoveFile: (id: string) => void
}

export interface UserInfo {
  name: string
  email: string
  phone: string
}

export interface UserInfoFormProps {
  onSubmit: (userInfo: UserInfo) => void
  isLoading?: boolean
  requiredFields?: ('name' | 'email' | 'phone')[]
}