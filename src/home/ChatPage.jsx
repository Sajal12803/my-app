import React, { useState } from 'react';
import { Phone, Video, Send, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ChatPage.css'

const ChatPage = () => {
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [type,setType]=useState(false);

  const volunteers = [
    { id: 2, name: 'Volunteer 2', lastMessage: 'lorem ipsum ....', time: '5:06 pm' },
    { id: 3, name: 'Volunteer 3', lastMessage: 'lorem ipsum ....', time: '5:00 pm' },
    { id: 6, name: 'Volunteer 6', lastMessage: 'lorem ipsum ....', time: '4:59 pm' },
    { id: 5, name: 'Volunteer 5', lastMessage: 'lorem ipsum ....', time: '4:56 pm' },
    { id: 1, name: 'Volunteer 1', lastMessage: 'lorem ipsum ....', time: '3:41 pm' },
    { id: 4, name: 'Volunteer 4', lastMessage: 'lorem ipsum ....', time: '3:06 pm' },
    { id: 8, name: 'Volunteer 8', lastMessage: 'lorem ipsum ....', time: '2:59 pm' },
  ];

  const handleVolunteerSelect = (volunteer) => {
    setSelectedVolunteer(volunteer);
  };

  const handleSendMessage = () => {
    console.log(`Sending message to ${selectedVolunteer.name}: ${message}`);
    setMessage('');
  };

  const handleVoiceChat = () => {
    console.log(`Initiating voice chat with ${selectedVolunteer.name}`);
  };

  const handleVideoCall = () => {
    console.log(`Initiating video call with ${selectedVolunteer.name}`);
  };

  const navigateToProfile = () => {
    navigate('/ElderProfile');
  };
  const handleClick=()=>{
    setType(!type)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-orange-400 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/api/placeholder/40/40" alt="ElderAid Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-xl font-bold">ElderAid</h1>
        </div>
        <h2 className="text-lg">All Messages</h2>
        <Menu className="w-6 h-6" />
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-1/3 bg-white overflow-y-auto border-r">
          <div className="p-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border rounded-md"
            />
          </div>
          {volunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className={`p-4 hover:bg-gray-100 cursor-pointer ${
                selectedVolunteer?.id === volunteer.id ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleVolunteerSelect(volunteer)}
            >
              <div className="flex items-center">
                <img src="/api/placeholder/40/40" alt={volunteer.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h3 className="font-semibold">{volunteer.name}</h3>
                  <p className="text-sm text-gray-600">{volunteer.lastMessage}</p>
                </div>
                <span className="ml-auto text-xs text-gray-500">{volunteer.time}</span>
              </div>
            </div>
          ))}
        </aside>

        <main className="flex-1 flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Chat messages would go here */}
          </div>

          <div className="p-4 bg-white border-t">
          <div className={type ? 'hidden' : 'flex justify-between items-center gap-2 '}>

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-l-md"
              />
              <button
                onClick={handleSendMessage}
                className="bg-orange-400 text-white p-2 rounded-r-md w-12"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-between mt-2">
              <button onClick={handleClick} className="bg-orange-400 text-white px-4 py-2 rounded-md flex-1 mr-2">
                Type
              </button>
              <button
                onClick={handleVoiceChat}
                className="bg-orange-400 text-white px-4 py-2 rounded-md flex-1"
              >
                Voice Chat
              </button>
            </div>
          </div>
        </main>

        <aside className="w-1/4 bg-white border-l">
          <nav>
            <ul>
              <li className="p-4 hover:bg-gray-100 cursor-pointer" onClick={navigateToProfile}>
                Profile
              </li>
              <li className="p-4 hover:bg-gray-100 cursor-pointer">Reminders</li>
              <li className="p-4 hover:bg-gray-100 cursor-pointer">Payments</li>
              <li className="p-4 hover:bg-gray-100 cursor-pointer">Medical Report</li>
              <li className="p-4 hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
          </nav>
          {selectedVolunteer && (
            <div className="p-4 border-t">
              <h3 className="font-semibold mb-2">Call {selectedVolunteer.name}</h3>
              <div className="flex justify-around">
                <button
                  onClick={handleVoiceChat}
                  className="bg-green-500 text-white p-2 rounded-full"
                >
                  <Phone className="w-6 h-6" />
                </button>
                <button
                  onClick={handleVideoCall}
                  className="bg-blue-500 text-white p-2 rounded-full"
                >
                  <Video className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default ChatPage;