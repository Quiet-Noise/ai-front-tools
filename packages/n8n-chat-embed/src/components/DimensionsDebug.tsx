import React, { useState, useEffect } from 'react'
import { useDeviceDetection } from '../hooks'

interface DimensionsDebugProps {
  visible?: boolean
}

interface ViewportInfo {
  documentWidth: number
  documentHeight: number
  visualWidth: number
  visualHeight: number
  offsetLeft: number
  offsetTop: number
  scale: number
  isKeyboardOpen: boolean
}

export const DimensionsDebug: React.FC<DimensionsDebugProps> = ({ visible = true }) => {
  const device = useDeviceDetection()
  const [viewportInfo, setViewportInfo] = useState<ViewportInfo>({
    documentWidth: window.innerWidth,
    documentHeight: window.innerHeight,
    visualWidth: window.visualViewport?.width || window.innerWidth,
    visualHeight: window.visualViewport?.height || window.innerHeight,
    offsetLeft: window.visualViewport?.offsetLeft || 0,
    offsetTop: window.visualViewport?.offsetTop || 0,
    scale: window.visualViewport?.scale || 1,
    isKeyboardOpen: false
  })

  useEffect(() => {
    const updateViewportInfo = () => {
      const docWidth = window.innerWidth
      const docHeight = window.innerHeight
      const vvWidth = window.visualViewport?.width || docWidth
      const vvHeight = window.visualViewport?.height || docHeight
      const vvOffsetLeft = window.visualViewport?.offsetLeft || 0
      const vvOffsetTop = window.visualViewport?.offsetTop || 0
      const vvScale = window.visualViewport?.scale || 1
      
      // Keyboard detection: Visual Viewport height < 75% of document height
      const isKeyboardOpen = vvHeight < docHeight * 0.75

      setViewportInfo({
        documentWidth: docWidth,
        documentHeight: docHeight,
        visualWidth: vvWidth,
        visualHeight: vvHeight,
        offsetLeft: vvOffsetLeft,
        offsetTop: vvOffsetTop,
        scale: vvScale,
        isKeyboardOpen
      })
    }

    // Update on window resize
    window.addEventListener('resize', updateViewportInfo)
    window.addEventListener('orientationchange', updateViewportInfo)

    // Update on Visual Viewport changes
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateViewportInfo)
      window.visualViewport.addEventListener('scroll', updateViewportInfo)
    }

    // Initial update
    updateViewportInfo()

    return () => {
      window.removeEventListener('resize', updateViewportInfo)
      window.removeEventListener('orientationchange', updateViewportInfo)
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateViewportInfo)
        window.visualViewport.removeEventListener('scroll', updateViewportInfo)
      }
    }
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      background: 'rgba(0,0,0,0.9)',
      color: 'white',
      padding: '12px',
      borderRadius: '8px',
      fontSize: '11px',
      fontFamily: 'monospace',
      zIndex: 10000,
      maxWidth: '320px',
      lineHeight: '1.4'
    }}>
      <div style={{ color: '#00ff88', fontWeight: 'bold', marginBottom: '8px' }}>
        📱 VIEWPORT DEBUG
      </div>
      
      <div style={{ marginBottom: '6px' }}>
        <strong>Device:</strong> {device.isMobile ? '📱 Mobile' : '🖥️ Desktop'} 
        ({device.screenWidth} x {device.screenHeight})
      </div>
      
      <div style={{ marginBottom: '6px' }}>
        <strong>Document:</strong> {viewportInfo.documentWidth} x {viewportInfo.documentHeight}
      </div>
      
      <div style={{ marginBottom: '6px', color: window.visualViewport ? '#00ff88' : '#ff8888' }}>
        <strong>Visual VP:</strong> {viewportInfo.visualWidth} x {viewportInfo.visualHeight}
        {window.visualViewport ? ' ✅' : ' ❌ Not Available'}
      </div>
      
      {window.visualViewport && (
        <>
          <div style={{ marginBottom: '6px' }}>
            <strong>Offset:</strong> {viewportInfo.offsetLeft}, {viewportInfo.offsetTop}
          </div>
          
          <div style={{ marginBottom: '6px' }}>
            <strong>Scale:</strong> {viewportInfo.scale.toFixed(2)}x
          </div>
        </>
      )}
      
      <div style={{ 
        marginBottom: '6px', 
        color: viewportInfo.isKeyboardOpen ? '#ffaa00' : '#00ff88' 
      }}>
        <strong>Keyboard:</strong> {viewportInfo.isKeyboardOpen ? '⌨️ OPEN' : '❌ Closed'}
      </div>
      
      <div style={{ fontSize: '10px', color: '#888', marginTop: '6px' }}>
        Diff: {viewportInfo.documentHeight - viewportInfo.visualHeight}px
      </div>
    </div>
  )
}