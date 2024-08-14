import React, { useState, useEffect } from 'react';
import MessagesList from './MessagesList';
import ChatDetail from './ChatDetail';
import { useSpring, animated } from '@react-spring/web';

const Inbox = ({ showInbox, firstOpen }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showDetailChat, setShowDetailChat] = useState(false)

  const chatDetailAnimation = useSpring({
    opacity: showDetailChat ? 1 : 0,
    transform: showDetailChat ? 'scale(1)' : 'scale(0.95)',
    config: { duration: 200 },
  });

  const messagesListAnimation = useSpring({
    opacity: !showDetailChat ? 1 : 0,
    transform: !showDetailChat ? 'scale(1)' : 'scale(0.95)',
    config: { duration: 200 },
  });

  useEffect(() => {
    if (firstOpen) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    }
  }, [firstOpen])

  return (
    <div className={`absolute transition-all duration-300 ${showInbox ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-4 z-0'} bg-white rounded shadow-lg w-[73vh] h-[75vh] max-w-[708px] max-h-[726px] flex flex-col`}>
      {
        showDetailChat ?
          <animated.div style={chatDetailAnimation} className="flex flex-col h-full">
            <ChatDetail closeChat={setShowDetailChat} />
          </animated.div>
        :
        <animated.div style={messagesListAnimation} className="flex flex-col h-full">
          <MessagesList isLoading={isLoading} openChat={setShowDetailChat}/>
        </animated.div>
      }
    </div>
  );
}

export default Inbox;