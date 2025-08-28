export interface DeviceInfo {
    isMobile: boolean;
    isDesktop: boolean;
    screenWidth: number;
    screenHeight: number;
    isArc: boolean;
    isSafari: boolean;
    isChrome: boolean;
    supportsVisualViewport: boolean;
}
/**
 * Comprehensive device and browser detection
 */
export declare function detectDevice(): DeviceInfo;
//# sourceMappingURL=mobile.d.ts.map