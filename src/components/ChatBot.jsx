import { MessageCircle } from 'lucide-react';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import "../css/ChatBot.css";

function ChatBotWrapper(){
  const [isOpen, setIsOpen] =useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(()=>{
    setMessages([{sender: "bot", text: "Hello! How can I assist you today?"}]);
  }, [])

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    try {
      const response = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: input,
          session_id: "user123",
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      if (data.rows && data.rows.length > 0) {
        setMessages((prev) => [...prev, { sender: "bot", text: data.answer, rows: data.rows }]);
      } else {
        setMessages((prev) => [...prev, { sender: "bot", text: "No listings found." }]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { sender: "bot", text: "Something went wrong. Try again." }]);
    }
  };

  return(
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
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chatbot-message ${msg.sender}`}
                style={{ marginBottom: "10px" }}
              >
              {msg.text && (
                <div style={{ marginBottom: "5px", fontStyle: "italic" }}>
                  {msg.text}
                </div>
              )}
              {msg.rows && (
                msg.rows.map((listing) => (
                  <div key={listing.listing_id} style={{ marginBottom: "8px" }}>
                    <Link 
                      to={`/listing/${listing.listing_id}`}
                      target="_blank"
                      style={{
                        fontWeight: "bold",
                        color: "#1a73e8",
                        textDecoration: "underline"
                      }}
                    >
                      {listing.title}
                    </Link>
                    <div>Price: {listing.price.toLocaleString()} LKR</div>
                    <div>Location: {listing.location}</div>
                  </div>
                ))
              )}
              </div>
            ))}
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBotWrapper;