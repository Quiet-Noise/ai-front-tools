import { useState, useEffect } from 'react'
import { detectDevice, DeviceInfo } from '../utils/mobile'

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(() => {
    if (typeof window === 'undefined') {
      return {
        isMobile: false,
        isDesktop: true,
        screenWidth: 1024,
        screenHeight: 768,
        isArc: false,
        isSafari: false,
        isChrome: false,
        supportsVisualViewport: false
      }
    }
    return detectDevice()
  })

  useEffect(() => {
    const updateDeviceInfo = () => {
      setDeviceInfo(detectDevice())
    }

    window.addEventListener('resize', updateDeviceInfo)
    window.addEventListener('orientationchange', updateDeviceInfo)

    return () => {
      window.removeEventListener('resize', updateDeviceInfo)
      window.removeEventListener('orientationchange', updateDeviceInfo)
    }
  }, [])

  return deviceInfo
}