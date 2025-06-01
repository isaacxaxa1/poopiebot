import React, { useState } from 'react';

export default function PieBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "You", text: input }]);
    setInput("");
    // Mock reply
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "Pie Bot", text: "Hi Piee 💛 I'm here for you!" }]);
    }, 500);
  };

  return (
    <div style={{ maxWidth: 500, margin: "20px auto", fontFamily: "sans-serif" }}>
      <h2>Hi Piee 💛</h2>
      <div style={{ background: "#fffbe6", padding: 10, borderRadius: 8, minHeight: 200 }}>
        {messages.map((msg, i) => (
          <div key={i}><strong>{msg.sender}:</strong> {msg.text}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: "100%", padding: 8, marginTop: 10 }}
        placeholder="Type something sweet..."
      />
      <button onClick={handleSend} style={{ marginTop: 10, padding: 8, width: "100%" }}>
        Send
      </button>
    </div>
  );
}
