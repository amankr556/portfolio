import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'AmanBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! Main AmanBot hoon. Aman ke portfolio mein aapka swagat hai! 'skills' type karke dekho.`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;