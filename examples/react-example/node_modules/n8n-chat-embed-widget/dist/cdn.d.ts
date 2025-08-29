import { ChatConfig } from './types';

declare global {
    interface Window {
        N8nChatEmbed: {
            init: (containerId: string, config: ChatConfig) => void;
            create: (config: ChatConfig) => HTMLElement;
        };
    }
}
declare const N8nChatEmbedLib: {
    init: (containerId: string, config: ChatConfig) => void;
    create: (config: ChatConfig) => HTMLElement;
};
export default N8nChatEmbedLib;
//# sourceMappingURL=cdn.d.ts.map