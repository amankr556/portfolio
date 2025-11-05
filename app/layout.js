import "./globals.css";
import 'react-chatbot-kit/build/main.css'; // Chatbot ka CSS
import MyChatbot from "../components/MyChatbot"; // Chatbot component

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}

        <MyChatbot />
      </body>
    </html>
  );
}
