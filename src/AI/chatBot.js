import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hi there! How can I assist you today?",
      sender: "ChatBot",
    },
  ]);

  // Predefined responses for simplicity
  const predefinedResponses = {
    hello: "Hello! How can I help you?",
    ecommerce: "Starting an e-commerce business can be exciting! Need advice on setup or marketing?",
    ai: "Creating an AI model involves understanding the data and choosing the right algorithms.",
    default: "Sorry, I didn't understand that. Can you try rephrasing?",
  };

  const handleSend = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { message, sender: "User" },
    ]);

    const lowercaseMessage = message.toLowerCase();

    // Get predefined response or fallback to default
    const response =
      predefinedResponses[
        Object.keys(predefinedResponses).find((key) =>
          lowercaseMessage.includes(key)
        )
      ] || predefinedResponses.default;

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: response, sender: "ChatBot" },
      ]);
    }, 1000);
  };

  return (
    <div style={{ height: "400px", width: "350px", margin: "20px auto" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {messages.map((msg, i) => (
              <Message
                key={i}
                model={{
                  message: msg.message,
                  sentTime: "just now",
                  sender: msg.sender,
                  direction: msg.sender === "User" ? "outgoing" : "incoming",
                }}
              />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type your message..."
            onSend={handleSend}
            attachButton={false}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

const App = () => {
  return (
    <>
      <div id="webcrumbs">
        <div className="flex flex-col items-center">
          <h1 className="text-[28px] font-title mb-4">
            What can I help you with?
          </h1>
          <ChatBot />
        </div>
      </div>
    </>
  );
};

export default App;
