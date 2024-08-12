import React, { useState } from 'react';
import searchIcon from './assets/images/search_24px.png';
import featherIcon from './assets/images/feather_stroke.png';
import taskIcon from './assets/images/chrome_reader_mode_24px.png';
import inboxIcon from './assets/images/question_answer_24px.png';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInbox, setShowInbox] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const openInbox = () => {
    setShowInbox(true);
  };

  return (
    <div className="flex h-screen">
      {/* sidebar */}
      <aside className="w-2/12 bg-dark-gray">
      </aside>
      {/* divider */}
      <div className="w-px bg-white"></div> 
      {/* content */}
      <main className="flex-1 bg-dark-gray text-white">
        <div className="flex items-center bg-gray text-white p-2 h-[58px] w-full">
          <img src={searchIcon} alt="Search" className="h-4 w-4 mr-2 ml-4" /> 
          <input
            type="text"
            className="bg-transparent focus:outline-none w-full"
          />
        </div>
        {/* Floating buttons */}
        <div className="fixed bottom-6 right-8 flex flex-col items-end">
          { 
            showInbox && (
              <div className="bg-white p-4 rounded shadow-lg w-[70vh] h-[72vh] flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <input
                    type="text"
                    placeholder="Search"
                    className="border rounded-lg px-2 py-1 w-full"
                  />
                  <button className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-1 justify-center items-center">
                  <div className="text-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <p>Loading Chats ...</p>
                  </div>
                </div>
              </div> 
            )
          } 
          <div className="flex space-x-4 items-end">
            <div className={`transition-all duration-300 ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} flex flex-row items-end mt-2 space-x-4`}>
              <div className="flex flex-col items-center">
                <span className="text-white text-sm mb-2">Task</span>
                <button className="bg-white p-5 w-[60px] h-[60px] rounded-full shadow-lg">
                  <img src={taskIcon} alt="Task" className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white text-sm mb-2">Inbox</span>
                <button onClick={openInbox} className="bg-white p-5 w-[60px] h-[60px] rounded-full shadow-lg">
                  <img src={inboxIcon} alt="Inbox" className="h-6 w-6" />
                </button>
              </div>
            </div>
            <button onClick={toggleExpand} className="bg-blue-500 text-white p-4 w-[68px] h-[68px] rounded-full shadow-lg">
              <img src={featherIcon} alt="Search" className="h-8 w-[18px] mx-2" /> 
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
