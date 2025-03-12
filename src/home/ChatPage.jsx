import React, { useState } from 'react';
import { Phone, Video, MoreVertical, Search, Bell, CreditCard, FileText, LogOut, User, Send, Mic } from 'lucide-react';


const ElderAidApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [messages, setMessages] = useState({});
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(true); // Default to typing mode
  const [isRecording, setIsRecording] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const volunteers = [
    { id: 1, name: 'Volunteer 1', lastMessage: 'Lorem ipsum...', time: '3:41 pm' },
    { id: 2, name: 'Volunteer 2', lastMessage: 'Lorem ipsum...', time: '5:08 pm', active: true },
    { id: 3, name: 'Volunteer 3', lastMessage: 'Lorem ipsum...', time: '5:00 pm' },
    { id: 4, name: 'Volunteer 4', lastMessage: 'Lorem ipsum...', time: '3:08 pm' },
    { id: 5, name: 'Volunteer 5', lastMessage: 'Lorem ipsum...', time: '4:05 pm' },
    { id: 6, name: 'Volunteer 6', lastMessage: 'Lorem ipsum...', time: '4:30 pm' },
    { id: 8, name: 'Volunteer 8', lastMessage: 'Lorem ipsum...', time: '3:15 pm' },
  ];

  // Initialize message history if it doesn't exist
  const initializeChat = (volunteerId) => {
    if (!messages[volunteerId]) {
      if (volunteerId === 2) {
        // Pre-populate chat for Volunteer 2 as shown in the mockup
        setMessages({
          ...messages,
          [volunteerId]: [
            { sender: 'me', text: 'Good Morning Mr Robinson', time: 'Today' },
            { sender: 'them', text: 'Good Morning Volunteer 2', time: 'Today' },
            { sender: 'me', text: 'Lorem ipsum dolor sit amet consectetur. Pharetra sed faucibus id pretium. Enim risus congue ut sit et vel elit sapien.', time: 'Today' },
            { sender: 'me', text: 'Lorem ipsum dolor sit amet consectetur. Pharetra sed faucibus id pretium. Enim risus congue ut sit et vel elit sapien.', time: 'Today' },
            { sender: 'them', text: 'Lorem ipsum dolor sit amet consectetur. Pharetra sed faucibus id pretium. Enim risus congue ut sit et vel elit sapien.', time: 'Today' },
          ]
        });
      } else {
        setMessages({
          ...messages,
          [volunteerId]: []
        });
      }
    }
  };

  const selectVolunteer = (volunteer) => {
    setSelectedVolunteer(volunteer);
    initializeChat(volunteer.id);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || !selectedVolunteer) return;

    setMessages({
      ...messages,
      [selectedVolunteer.id]: [
        ...(messages[selectedVolunteer.id] || []),
        { sender: 'me', text: inputMessage, time: 'Just now' }
      ]
    });

    setInputMessage('');
    
    // Simulate volunteer response after 1 second
    setTimeout(() => {
      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedVolunteer.id]: [
          ...(prevMessages[selectedVolunteer.id] || []),
          { sender: 'them', text: `Thank you for your message. This is a response from ${selectedVolunteer.name}.`, time: 'Just now' }
        ]
      }));
    }, 1000);
  };

  // Handle calls
  const handleCall = (type, volunteerId) => {
    alert(`Initiating ${type} call with ${volunteers.find(v => v.id === volunteerId).name}`);
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
    if (selectedVolunteer) {
      setMessages({
        ...messages,
        [selectedVolunteer.id]: [
          ...(messages[selectedVolunteer.id] || []),
          { sender: 'me', text: '🎤 Voice message', time: 'Just now' }
        ]
      });
    }
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
        {/* Sidebar with volunteers */}
        <div className="w-64 border-r bg-orange-50">
          <div className="p-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
              />
            </div>
          </div>
          <div className="overflow-y-auto h-full">
            {volunteers.map((volunteer) => (
              <div
                key={volunteer.id}
                className={`flex items-center p-3 border-b cursor-pointer hover:bg-orange-100 ${
                  selectedVolunteer?.id === volunteer.id ? 'bg-orange-100' : ''
                }`}
                onClick={() => selectVolunteer(volunteer)}
              >
                <div className="mr-3 bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm">
                    {volunteer.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-semibold text-sm">{volunteer.name}</span>
                    <span className="text-xs text-gray-500">{volunteer.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">
                    {volunteer.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {selectedVolunteer ? (
            <>
              {/* Chat header */}
              <div className="bg-orange-100 p-4 flex justify-between items-center border-b">
                <div className="flex items-center">
                  <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600">
                      {selectedVolunteer.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{selectedVolunteer.name}</div>
                    <div className="text-xs text-gray-500">
                      {selectedVolunteer.active ? 'Active now' : 'Offline'}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Video 
                    className="text-gray-600 cursor-pointer hover:text-orange-500" 
                    onClick={() => handleCall('video', selectedVolunteer.id)}
                  />
                  <Phone 
                    className="text-gray-600 cursor-pointer hover:text-orange-500" 
                    onClick={() => handleCall('voice', selectedVolunteer.id)}
                  />
                  <MoreVertical className="text-gray-600 cursor-pointer" />
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-orange-50">
                {messages[selectedVolunteer.id]?.map((message, index) => (
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

              {/* Message input */}
              <div className="border-t">
                {/* Chat mode toggle buttons */}
                <div className="flex">
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
                
                {/* Typing interface */}
                {isTyping && (
                  <form onSubmit={sendMessage} className="flex items-center p-2 bg-white">
                    <input
                      type="text"
                      placeholder="Type your message here..."
                      className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring-1 focus:ring-orange-300"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-orange-300 text-white p-2 rounded-r-lg"
                    >
                      <Send size={20} />
                    </button>
                  </form>
                )}
                
                {/* Voice chat interface */}
                {!isTyping && (
                  <div className="flex justify-center items-center p-4 bg-white">
                    <button
                      className={`p-4 rounded-full ${isRecording ? 'bg-red-500' : 'bg-orange-300'} text-white`}
                      onMouseDown={startRecording}
                      onMouseUp={stopRecording}
                      onTouchStart={startRecording}
                      onTouchEnd={stopRecording}
                    >
                      <Mic size={24} />
                    </button>
                    <p className="ml-4 text-gray-500">
                      {isRecording ? 'Recording...' : 'Press and hold to record'}
                    </p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a volunteer to start chatting
            </div>
          )}
        </div>
      </div>

      {/* Sliding Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4 space-y-4">
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
            <User size={20} />
            <span>Profile</span>
          </div>
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
            <Bell size={20} />
            <span>Reminders</span>
          </div>
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
            <CreditCard size={20} />
            <span>Payments</span>
          </div>
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
            <FileText size={20} />
            <span>Medical Report</span>
          </div>
          <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
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

export default ElderAidApp;