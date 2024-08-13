import React, { useState } from 'react';
import searchIcon from './assets/images/search_white.png';
import Inbox from './components/Inbox';
import Tasks from './components/Tasks';
import FloatingButton from './components/FloatingButton';
import ActiveFloatingButton from './components/ActiveFloatingButton';

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showInbox, setShowInbox] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [loadingInbox, setLoadingInbox] = useState(false);
  const [loadingTasks, setLoadingTasks] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const openInbox = () => {
    if (loadingInbox === false) {
      setLoadingInbox(true);
    }
    setIsExpanded(false);
    setShowTasks(false);
    setShowInbox(!showInbox);
  };

  const openTasks = () => {
    if (loadingTasks === false) {
      setLoadingTasks(true);
    }
    setIsExpanded(false);
    setShowInbox(false);
    setShowTasks(!showTasks);
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
          <div className="relative">
            <Inbox showInbox={showInbox} firstOpen={loadingInbox} />
            <Tasks showTasks={showTasks} firstOpen={loadingTasks} />
          </div>
          {
            showInbox || showTasks ?
              <ActiveFloatingButton openTasks={openTasks} openInbox={openInbox} showInbox={showInbox} showTasks={showTasks} />
              :
              <FloatingButton isExpanded={isExpanded} openTasks={openTasks} openInbox={openInbox} toggleExpand={toggleExpand} />
          }
        </div>
      </main>
    </div>
  );
}

export default App;
