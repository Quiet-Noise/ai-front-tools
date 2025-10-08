import React, { useState } from "react";
import {
  ChatEmbed,
  ChatConfig,
  ChatMessage,
  MediaFile,
} from "n8n-chat-embed-widget";
import { DimensionsDebug } from "../../../packages/n8n-chat-embed/src/components/DimensionsDebug";
import Fullscreen from "./Fullscreen";
import "n8n-chat-embed-widget/styles.css";
import "./App.css";

const WEBHOOK_URL =
  "https://quietnoise.app.n8n.cloud/webhook/ttc4f704-257e-4b10-8830-471f7c5e6605";

function App() {
  const [activeDemo, setActiveDemo] = useState<string>("light");
  const [showFloating, setShowFloating] = useState(true);
  const [messageLog, setMessageLog] = useState<ChatMessage[]>([]);
  const [showFullscreen, setShowFullscreen] = useState(false);

  // Check if we should show fullscreen based on URL
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('fullscreen') === 'true') {
      setShowFullscreen(true);
    }
  }, []);

  if (showFullscreen) {
    return <Fullscreen />;
  }

  const handleMessage = (message: ChatMessage) => {
    setMessageLog((prev) => [...prev, message]);
    console.log("New message:", message);
  };

  const handleError = (error: Error) => {
    console.error("Chat error:", error);
    alert(`Chat error: ${error.message}`);
  };

  const handleFileUpload = (files: MediaFile[]) => {
    console.log("Files uploaded:", files);
  };

  const configs: Record<string, ChatConfig> = {
    light: {
      n8nWebhookUrl: WEBHOOK_URL,
      title: "💬 Customer Support",
      subtitle: "We're here to help!",
      theme: "light",
      position: "inline",
      width: 400,
      height: 500,
      enableFileUpload: true,
      enableAudio: true,
      maxFiles: 5,
      showTimestamps: true,
      placeholder: "Type your message or upload files...",
      colors: {
        primary: "#007bff",
        userBubble: "#007bff",
      },
    },
    dark: {
      n8nWebhookUrl: WEBHOOK_URL,
      title: "🌙 AI Assistant Pro",
      subtitle: "Dark mode enabled",
      theme: "dark",
      position: "inline",
      width: 400,
      height: 500,
      enableFileUpload: true,
      maxFiles: 10,
      showTypingIndicator: true,
      showTimestamps: true,
      placeholder: "Ask me anything...",
      colors: {
        primary: "#bb86fc",
        userBubble: "#bb86fc",
        botBubble: "#3a3a3a",
      },
    },
    custom: {
      n8nWebhookUrl: WEBHOOK_URL,
      title: "🎨 Brand Chat",
      subtitle: "Custom styled for you",
      theme: "light",
      position: "inline",
      width: 400,
      height: 500,
      enableFileUpload: true,
      maxFiles: 3,
      showTimestamps: false,
      placeholder: "Message us...",
      colors: {
        primary: "#667eea",
        background: "#f8fafc",
        userBubble: "#667eea",
        botBubble: "#e2e8f0",
        text: "#2d3748",
      },
    },
    mobile: {
      n8nWebhookUrl: WEBHOOK_URL,
      title: "📱 Mobile Optimized",
      subtitle: "Perfect for mobile",
      theme: "light",
      position: "inline",
      width: 400,
      height: 500,
      enableFileUpload: true,
      maxFiles: 2,
      showTypingIndicator: true,
      placeholder: "Tap to type...",
      colors: {
        primary: "#ff6b6b",
        userBubble: "#ff6b6b",
      },
    },
  };

  const floatingConfig: ChatConfig = {
    n8nWebhookUrl: WEBHOOK_URL,
    title: "Alex MDCC International",
    subtitle: "",
    theme: "light",
    position: "bottom-right",
    width: 350,
    height: 500,
    initialState: "closed",
    showToggleButton: true,
    enableFileUpload: true,
    enableCamera: true,
    enableAudio: true,
    enableUserInfo: true,
    enableMessageSuggestions: true,
    initialSuggestions: [
      "What products do you offer?",
      "What services do you provide?",
      "Who are your sister companies?",
      "Can I see your catalogues?",
    ],
    maxSuggestions: 5,
    autoHideSuggestions: true,
    userInfoRequiredFields: ["name", "email", "phone"],
    maxFileSize: 10,
    maxFiles: 5,
    placeholder: "Type a message...",
    showTypingIndicator: true,
    colors: {
      primary: "#0d9488",
      userBubble: "#0d9488",
      botBubble: "#f3f4f6",
      background: "#ffffff",
      text: "#111827",
    },
  };

  return (
    <div className="app">
      <DimensionsDebug />
      <div className="container">
        <header className="header">
          <h1>🤖 N8n Chat Embed</h1>
          <p>React Integration Examples</p>
          <div className="status-badge">
            <span className="status live">Live Demo</span>
            <span className="webhook-url">
              Connected to: <code>{WEBHOOK_URL.split("/").pop()}</code>
            </span>
          </div>
          <div style={{ marginTop: '16px' }}>
            <a
              href="/?fullscreen=true"
              target="_blank"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '500',
                fontSize: '14px',
                transition: 'transform 0.2s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              🖥️ View Fullscreen Chat Example
            </a>
          </div>
        </header>

        <div className="controls">
          <div className="demo-selector">
            <h3>Choose a Demo:</h3>
            <div className="demo-buttons">
              {Object.keys(configs).map((key) => (
                <button
                  key={key}
                  className={`demo-btn ${activeDemo === key ? "active" : ""}`}
                  onClick={() => setActiveDemo(key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="floating-control">
            <p>
              ✅ <strong>Floating Chat Active</strong> - Look for the chat
              button at the bottom right corner
            </p>
            <p className="floating-info">
              The floating chat widget is now always visible and manages its own
              open/close state via the toggle button.
            </p>
          </div>
        </div>

        <div className="demo-area">
          <div className="info-panel">
            <h3>📊 Activity Log</h3>
            <div className="message-log">
              {messageLog.length === 0 ? (
                <p className="no-messages">No messages yet. Start chatting!</p>
              ) : (
                messageLog.slice(-5).map((msg) => (
                  <div key={msg.id} className={`log-entry ${msg.type}`}>
                    <div className="log-header">
                      <span className="log-type">
                        {msg.type === "user" ? "👤" : "🤖"}
                      </span>
                      <span className="log-time">
                        {msg.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="log-content">
                      {msg.content}
                      {msg.attachments && msg.attachments.length > 0 && (
                        <div className="log-attachments">
                          📎 {msg.attachments.length} file(s)
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="code-section">
          <h3>📋 React Integration Code</h3>
          <pre>
            <code>{`import { ChatEmbed } from 'n8n-chat-embed-widget'

function App() {
  const config = {
    n8nWebhookUrl: '${WEBHOOK_URL}',
    title: 'AI Assistant',
    theme: 'light',
    enableFileUpload: true,
    colors: {
      primary: '#007bff'
    }
  }

  const handleMessage = (message) => {
    console.log('New message:', message)
  }

  return (
    <ChatEmbed
      config={config}
      onMessage={handleMessage}
      onError={(error) => console.error(error)}
      onFileUpload={(files) => console.log(files)}
    />
  )
}`}</code>
          </pre>
        </div>
      </div>

      <ChatEmbed
        config={floatingConfig}
        onMessage={handleMessage}
        onError={handleError}
        onFileUpload={handleFileUpload}
      />
    </div>
  );
}

export default App;

