import { default as React } from 'react';

interface ToggleButtonProps {
    isOpen: boolean;
    onClick: () => void;
    position: 'bottom-right' | 'bottom-left';
    primaryColor: string;
    popupMessage?: string;
}
export declare const ToggleButton: React.FC<ToggleButtonProps>;
export {};
//# sourceMappingURL=ToggleButton.d.ts.map