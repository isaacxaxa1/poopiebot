
import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([{ role: "bot", text: "Hi Piee 💛 I'm here for you!" }]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    const botReply = "Tumne bola: " + input + " 💬 Main hamesha yahin hoon, meri Pucchi 💛";
    setMessages([...newMessages, { role: "bot", text: botReply }]);
  };

  return (
    <div className="app">
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={"message " + msg.role}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-bar">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type something sweet..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
