import { useState } from "react";
import { MessageCircle } from "lucide-react"; // optional
import "../css/ChatBot.css";

const ChatBotWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        <MessageCircle width={24} height={24} />
      </div>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Rental Assistant</span>
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>

          <div className="chatbot-messages">
            <p className="chatbot-message bot">Chat will appear here...</p>
          </div>

          <div className="chatbot-input-area">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotWrapper;
