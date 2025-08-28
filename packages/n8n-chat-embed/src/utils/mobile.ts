export interface DeviceInfo {
  isMobile: boolean
  isDesktop: boolean
  screenWidth: number
  screenHeight: number
  isArc: boolean
  isSafari: boolean
  isChrome: boolean
  supportsVisualViewport: boolean
}

/**
 * Comprehensive device and browser detection
 */
export function detectDevice(): DeviceInfo {
  const width = window.innerWidth
  const height = window.innerHeight
  const userAgent = navigator.userAgent.toLowerCase()
  
  // Simple mobile detection based on screen size and touch capability
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  const isSmallScreen = width < 768
  const isMobile = hasTouch || isSmallScreen
  
  // Browser detection
  const isArc = userAgent.includes('arc') || 
                userAgent.includes('company.thebrowser.browser') ||
                (window as any).ArcBrowser !== undefined
  const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent) && !isArc
  const isChrome = /chrome/.test(userAgent) && !isArc
  
  // Feature detection
  const supportsVisualViewport = !!window.visualViewport
  
  return {
    isMobile,
    isDesktop: !isMobile,
    screenWidth: width,
    screenHeight: height,
    isArc,
    isSafari,
    isChrome,
    supportsVisualViewport
  }
}