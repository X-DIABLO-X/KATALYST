import React, { useState, useEffect } from 'react';
import './App.css';
import Groq from 'groq-sdk';
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { RiVoiceprintFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { getUserInfo } from "../components/loginRegister/utils.js";
const groq = new Groq({ apiKey: "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", dangerouslyAllowBrowser: true });




  const App = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [isLightMode, setIsLightMode] = useState(localStorage.getItem('themeColor') === 'light_mode');
  const [isResponseGenerating, setIsResponseGenerating] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profilePic, setProfilePic] = useState('');
  const [name, setName] = useState('');
  var userName = name;
  console.log(userName);
  const Dataset = `you are a helpful assistant. Answer as Kat. Ask the user about their idea and transform it into something new using other users
 suggestions and also check statistical data and compare it with the data given by the user. Also check if it is possible to setup. Ask data like 
 budget, location, capital, resource,etc. and analyze the data. Also not only ask questions also give 
 suggestion in between. Also use INR for currency. Also ask user if they want any website or app for their business if yes then give them what latest 
 technologies should be used and also all the frameworks which are required for that website. Also give them an organised roadmap for their business.
   Add emojies to the conversation to make it interactive. If the user provides a decision making 
  problem or dataset then solve it accordingly asking as less questions as you can. Detailed explaination of the overview and finally a conclusion to end it.
  It will only works only if the user give dataset as prompt. The name of the user is ${userName}`.replace('{}', userName);
  // Load user info when the component mounts
  // Give these information little by little not at one time.
  // Ask questions one by one and not in one go.
  useEffect(() => {
    const { name, profilePic } = getUserInfo();
    setName(name);
    setProfilePic(profilePic);
  }, []);

  // Scroll to the latest message whenever chats are updated
  useEffect(() => {
    const chatListElement = document.querySelector(".chat-list");
    if (chatListElement) chatListElement.scrollTop = chatListElement.scrollHeight;
  }, [chats]);

  // Load chats and theme from local storage
  useEffect(() => {
    const savedChats = localStorage.getItem('saved-chats');
    if (savedChats) {
      setChats(JSON.parse(savedChats));
    }
    document.body.classList.toggle('light_mode', isLightMode);
  }, [isLightMode]);

  // Save chats to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('saved-chats', JSON.stringify(chats));
  }, [chats]);

  // Handle theme toggle
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    localStorage.setItem('themeColor', !isLightMode ? 'light_mode' : 'dark_mode');
  };
  // Function to send a new message
  const sendMessage = async () => {
    if (!userMessage.trim() || isResponseGenerating) return;
  
    const newChat = { role: 'user', text: userMessage };
    setChats((prevChats) => [...prevChats, newChat]);
    setUserMessage('');
    setIsResponseGenerating(true);
  
    const incomingChat = { role: 'system', text: '', isLoading: true };
    setChats((prevChats) => [...prevChats, incomingChat]);
  
    // Transform the `chats` array into the valid `messages` format
    const conversationHistory = [
      { role: 'system', content: Dataset },
      ...chats.map(chat => ({
        role: chat.role === 'system' ? 'assistant' : 'user', // Map 'bot' to 'assistant'
        content: chat.text,
      })),
      { role: 'user', content: userMessage }, // Add the current user message
    ];
  
    try {
      // Call the Groq API
      const chatCompletion = await groq.chat.completions.create({
        messages: conversationHistory,
        model: 'llama-3.2-90b-vision-preview',
        temperature: 1,
        max_tokens: 2048,
        top_p: 1,
        // stream: false,
        stop: null,
      });
  
      // Get the response from the API
      const botMessage = chatCompletion.choices[0].message.content;
  
      // Update the chat with the bot's response
      setChats((prevChats) => [
        ...prevChats.slice(0, prevChats.length - 1), // Remove loading message
        { role: 'bot', text: botMessage },
      ]);
    } catch (error) {
      setChats((prevChats) => [
        ...prevChats.slice(0, prevChats.length - 1), // Remove loading message
        { role: 'bot', text: `Error: ${error.message}`, isError: true },
      ]);
    } finally {
      setIsResponseGenerating(false);
    }
  };
  
  
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      const profilePopup = document.querySelector('.profile-popup');
      if (profilePopup && !profilePopup.contains(event.target)) {
        setIsProfileOpen(false);
        localStorage.removeItem('saved-chats');
        <Link to="/" />;
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle clearing all chats
  const clearChats = () => {
    localStorage.removeItem('saved-chats');
    setChats([]);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="profile-icon-container">
          {profilePic && (
            <img
              className="profile-icon"
              src={profilePic}
              alt="Profile Icon"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            />
          )}
          {isProfileOpen && (
            <div className="profile-popup">
              <Link to="/"><button onClick={clearChats}>Logout</button></Link>
            </div>
          )}
        </div>
        <h1 className="title">Hello, {name}</h1>
        <p className="subtitle">How can I help you today?</p>
        <ul className="suggestion-list">
          {[{ suggestion: 'Create an ecommerce website', icon: <FaCode /> },
            { suggestion: 'Start a coffee shop with something new', icon: <FaLightbulb /> },
            { suggestion: 'Can you help me compile ideas for my project', icon: <FaPencil /> },
            { suggestion: 'Give me the entire framework of how to build this project', icon: <FaCompass /> },
          ].map((item, index) => (
            <li
              key={index}
              className="suggestion"
              onClick={() => {
                setUserMessage(item.suggestion);
                document.querySelector(".typing-input").focus(); // Auto-focus input on selection
              }}
            >
              <h4 className="text">{item.suggestion}</h4>
              <span className="icon">{item.icon}</span>
            </li>
          ))}
        </ul>
      </header>
      <div className="chat-list">
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`message ${chat.role === 'bot' ? 'incoming' : 'outgoing'} ${chat.isLoading ? 'loading' : ''} ${chat.isError ? 'error' : ''}`}
          >
            <div className="message-content">
              <img
                className="avatar"
                src={chat.role === 'bot' ? require('./images/cat.jpg') : (profilePic)}
                alt={`${chat.role} avatar`}
              />
              <p className="text">{chat.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="typing-area">
        <form
          className="typing-form"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <div className="input-wrapper">
          <textarea
            placeholder="Enter a prompt here"
            className="typing-input"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            required
            rows={5}
            cols={30}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); 
                sendMessage();
              }
            }}
          />
            <button
              type="submit"
              id="send-message-button"
              className="icon material-symbols-rounded"
              >
              <IoSend />
            </button>
          </div>
<div className="action-buttons">
  <label htmlFor="file-upload" className="icon material-symbols-rounded file-upload-button">
    <RiVoiceprintFill />
    <input
      type="file"
      id="file-upload"
      style={{ display: 'none' }}
      onChange={(e) => {
        const file = e.target.files[0];
        if (file) {
          alert(`File uploaded: ${file.name}`); // Replace with actual file handling logic
        }
      }}
    />
  </label>
  <span
    id="theme-toggle-button"
    className="icon material-symbols-rounded"
    onClick={toggleTheme}
  >
    {isLightMode ? <MdDarkMode /> : <MdOutlineLightMode />}
  </span>
  <span
    id="delete-chat-button"
    className="icon material-symbols-rounded"
    onClick={clearChats}
  >
    <RiDeleteBin5Line />
  </span>
</div>
        </form>
        <p className="disclaimer-text">
          Catalyst may display inaccurate info, so double-check its responses.
        </p>
      </div>
    </div>
  );
};

export default App;
