import React, { useState } from 'react';
import { Phone, Video, MoreVertical, Search, Bell, CreditCard, FileText, LogOut, User, Send, Mic, Smile } from 'lucide-react';

const PageVolunteer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedElderly, setSelectedElderly] = useState(null);
  const [messages, setMessages] = useState({});
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(true); // Default to typing mode
  const [isRecording, setIsRecording] = useState(false);
  const [activeTab, setActiveTab] = useState('profile'); // For navigation

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const elderly = [
    { id: 1, name: 'Elder 1', lastMessage: 'Lorem ipsum...', time: '3:41 pm' },
    { id: 2, name: 'Elder 2', lastMessage: 'Lorem ipsum...', time: '5:08 pm', active: true },
    { id: 3, name: 'Elder 3', lastMessage: 'Lorem ipsum...', time: '5:00 pm' },
    { id: 4, name: 'Elder 4', lastMessage: 'Lorem ipsum...', time: '3:08 pm' },
    { id: 5, name: 'Elder 5', lastMessage: 'Lorem ipsum...', time: '4:05 pm' },
    { id: 6, name: 'Elder 6', lastMessage: 'Lorem ipsum...', time: '4:30 pm' },
    { id: 8, name: 'Elder 8', lastMessage: 'Lorem ipsum...', time: '3:15 pm' },
  ];

  // Initialize message history if it doesn't exist
  const initializeChat = (elderlyId) => {
    if (!messages[elderlyId]) {
      if (elderlyId === 2) {
        // Pre-populate chat for Elder 2 as shown in the mockup
        setMessages({
          ...messages,
          [elderlyId]: [
            { sender: 'them', text: 'Good Morning Mr Robinson', time: 'Today' },
            { sender: 'me', text: 'Good Morning Volunteer 2', time: 'Today' },
            { sender: 'them', text: 'Lorem ipsum dolor sit amet consectetur. Pharetra sed faucibus id pretium. Enim risus congue ut sit et vel elit sapien.', time: 'Today' },
            { sender: 'them', text: 'Lorem ipsum dolor sit amet consectetur. Pharetra sed faucibus id pretium. Enim risus congue ut sit et vel elit sapien.', time: 'Today' },
            { sender: 'me', text: 'Lorem ipsum dolor sit amet consectetur. Pharetra sed faucibus id pretium. Enim risus congue ut sit et vel elit sapien.', time: 'Today' },
          ]
        });
      } else {
        setMessages({
          ...messages,
          [elderlyId]: []
        });
      }
    }
  };

  const selectElderly = (elder) => {
    setSelectedElderly(elder);
    initializeChat(elder.id);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || !selectedElderly) return;

    setMessages({
      ...messages,
      [selectedElderly.id]: [
        ...(messages[selectedElderly.id] || []),
        { sender: 'me', text: inputMessage, time: 'Just now' }
      ]
    });

    setInputMessage('');
    
    // Simulate elderly response after 1 second
    setTimeout(() => {
      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedElderly.id]: [
          ...(prevMessages[selectedElderly.id] || []),
          { sender: 'them', text: `Thank you for your message. This is a response from ${selectedElderly.name}.`, time: 'Just now' }
        ]
      }));
    }, 1000);
  };

  // Handle calls
  const handleCall = (type, elderlyId) => {
    alert(`Initiating ${type} call with ${elderly.find(e => e.id === elderlyId).name}`);
  };

  // Toggle between typing and voice chat modes
  const toggleChatMode = (mode) => {
    setIsTyping(mode === 'type');
    if (mode === 'voice') {
      alert('Voice chat functionality is now active. Press and hold the microphone button to record.');
    }
  };

  // Handle voice recording
  const startRecording = () => {
    setIsRecording(true);
    alert('Recording started... (This is a simulation)');
  };

  const stopRecording = () => {
    setIsRecording(false);
    alert('Recording stopped. Message sent! (This is a simulation)');
    
    // Simulate sending a voice message
    if (selectedElderly) {
      setMessages({
        ...messages,
        [selectedElderly.id]: [
          ...(messages[selectedElderly.id] || []),
          { sender: 'me', text: '🎤 Voice message', time: 'Just now' }
        ]
      });
      
      // Simulate elderly response after 1 second
      setTimeout(() => {
        setMessages(prevMessages => ({
          ...prevMessages,
          [selectedElderly.id]: [
            ...(prevMessages[selectedElderly.id] || []),
            { sender: 'them', text: "I received your voice message! Thank you.", time: 'Just now' }
          ]
        }));
      }, 1500);
    }
  };

  // Handle navigation
  const handleNavigation = (tab) => {
    setActiveTab(tab);
    if (tab !== 'profile') {
      alert(`Navigating to ${tab} section. This feature would be fully implemented in a complete app.`);
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-orange-300 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center">
            <User size={16} className="text-orange-500" />
          </div>
          <h1 className="text-white font-bold">ElderAid</h1>
        </div>
        <div className="text-white font-semibold">All Message</div>
        <div onClick={toggleMenu} className="text-white cursor-pointer">
          ☰
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with elderly */}
        <div className="w-64 border-r bg-orange-50">
          <div className="p-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Elders"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
              />
            </div>
          </div>
          <div className="overflow-y-auto h-full">
            {elderly.map((elder) => (
              <div
                key={elder.id}
                className={`flex items-center p-3 border-b cursor-pointer hover:bg-orange-100 ${
                  selectedElderly?.id === elder.id ? 'bg-orange-100' : ''
                }`}
                onClick={() => selectElderly(elder)}
              >
                <div className="mr-3 bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm">
                    {elder.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-semibold text-sm">{elder.name}</span>
                    <span className="text-xs text-gray-500">{elder.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">
                    {elder.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {selectedElderly ? (
            <>
              {/* Chat header */}
              <div className="bg-orange-100 p-4 flex justify-between items-center border-b">
                <div className="flex items-center">
                  <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600">
                      {selectedElderly.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{selectedElderly.name}</div>
                    <div className="text-xs text-gray-500">
                      {selectedElderly.active ? 'Active now' : 'Offline'}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Video 
                    className="text-gray-600 cursor-pointer hover:text-orange-500" 
                    onClick={() => handleCall('video', selectedElderly.id)}
                  />
                  <Phone 
                    className="text-gray-600 cursor-pointer hover:text-orange-500" 
                    onClick={() => handleCall('voice', selectedElderly.id)}
                  />
                  <MoreVertical className="text-gray-600 cursor-pointer" />
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-orange-50">
                {messages[selectedElderly.id]?.map((message, index) => (
                  <div
                    key={index}
                    className={`max-w-xs md:max-w-md mb-4 ${
                      message.sender === 'me'
                        ? 'ml-auto bg-orange-300 rounded-lg p-3'
                        : 'mr-auto bg-white rounded-lg p-3'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                ))}
              </div>

              {/* Chat mode toggle buttons */}
              <div className="flex border-t">
                <button 
                  className={`w-1/2 py-2 text-center ${isTyping ? 'bg-orange-400' : 'bg-orange-300'} text-white font-semibold`}
                  onClick={() => toggleChatMode('type')}
                >
                  Type
                </button>
                <button 
                  className={`w-1/2 py-2 text-center ${!isTyping ? 'bg-orange-400' : 'bg-orange-300'} text-white font-semibold`}
                  onClick={() => toggleChatMode('voice')}
                >
                  Voice Chat
                </button>
              </div>
              
              {/* Enhanced typing interface */}
              {isTyping && (
                <div className="bg-white border-t p-3">
                  <form onSubmit={sendMessage} className="flex items-center rounded-lg border shadow-sm overflow-hidden">
                    <div className="px-3">
                      <Smile size={20} className="text-gray-400 cursor-pointer hover:text-orange-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Type your message here..."
                      className="flex-1 py-3 px-2 focus:outline-none"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-orange-400 hover:bg-orange-500 text-white p-3 transition-colors"
                    >
                      <Send size={20} />
                    </button>
                  </form>
                </div>
              )}
              
              {/* Enhanced voice chat interface */}
              {!isTyping && (
                <div className="flex justify-center items-center p-4 bg-white border-t">
                  <button
                    className={`p-4 rounded-full shadow-md ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-orange-400 hover:bg-orange-500'} text-white transition-colors`}
                    onMouseDown={startRecording}
                    onMouseUp={stopRecording}
                    onTouchStart={startRecording}
                    onTouchEnd={stopRecording}
                  >
                    <Mic size={24} />
                  </button>
                  <p className="ml-4 text-gray-600 font-medium">
                    {isRecording ? 'Recording...' : 'Press and hold to record'}
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select an elder to start chatting
            </div>
          )}
        </div>
      </div>

      {/* Sliding Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4 space-y-4">
          <div 
            className={`flex items-center space-x-3 p-2 ${activeTab === 'profile' ? 'bg-orange-100' : 'hover:bg-gray-100'} rounded cursor-pointer`}
            onClick={() => handleNavigation('profile')}
          >
            <User size={20} />
            <span>Profile</span>
          </div>
          <div 
            className={`flex items-center space-x-3 p-2 ${activeTab === 'reminders' ? 'bg-orange-100' : 'hover:bg-gray-100'} rounded cursor-pointer`}
            onClick={() => handleNavigation('reminders')}
          >
            <Bell size={20} />
            <span>Reminders</span>
          </div>
          <div 
            className={`flex items-center space-x-3 p-2 ${activeTab === 'payments' ? 'bg-orange-100' : 'hover:bg-gray-100'} rounded cursor-pointer`}
            onClick={() => handleNavigation('payments')}
          >
            <CreditCard size={20} />
            <span>Payments</span>
          </div>
          <div 
            className={`flex items-center space-x-3 p-2 ${activeTab === 'medical' ? 'bg-orange-100' : 'hover:bg-gray-100'} rounded cursor-pointer`}
            onClick={() => handleNavigation('medical')}
          >
            <FileText size={20} />
            <span>Medical Report</span>
          </div>
          <div 
            className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => alert('You have been logged out. (This is a simulation)')}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default PageVolunteer;