'use client'; // <-- YEH LINE SABSE ZAROORI HAI

import React, { useState } from 'react'; // useState import karo
import Chatbot from 'react-chatbot-kit';

import config from './chatbot/config.js';
import MessageParser from './chatbot/MessageParser.js';
import ActionProvider from './chatbot/ActionProvider.js';

const MyChatbot = () => {
  // Yeh state chat window ko toggle (show/hide) karne ke liye hai
  const [showBot, setShowBot] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>

      {/* Chatbot window */}
      <div style={{ display: showBot ? 'block' : 'none' }}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>

      {/* Chat icon button jo bot ko kholega/band karega */}
      <button
        onClick={() => setShowBot((prev) => !prev)}
        style={{
          backgroundColor: '#5ccc9d',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          marginTop: '10px',
          float: 'right', // Button ko right mein rakhega
          clear: 'both' // Ensures it stays below the chat window
        }}
      >
        {showBot ? 'X' : '🤖'}
      </button>
    </div>
  );
};

export default MyChatbot;