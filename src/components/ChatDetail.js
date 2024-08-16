import React, { useState, useEffect, useRef } from 'react'
import backIcon from './../assets/images/back.png';
import closeIcon from './../assets/images/close.png';

import ChatBubble from './ChatBubble';

const ChatDetail = ({closeChat}) => {
    const [messages, setMessages] = useState([
        {
          id: 1,
          sender: 'You',
          content: 'No worries. It will be completed ASAP. I’ve asked him yesterday.',
          time: '19:32',
          isUser: true,
        },
        {
          id: 2,
          sender: 'Mary Hilda',
          content: 'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
          time: '19:32',
          date: 'Today June 09, 2021',
          isUser: false,
        },
        {
          id: 3,
          sender: 'You',
          content: 'Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.',
          time: '19:32',
          isUser: true,
        },
        {
          id: 4,
          sender: 'Mary Hilda',
          content: 'Sure thing, Claren',
          time: '19:32',
          isUser: false,
        },
        {
          id: 5,
          sender: 'Obaidullah Amarkhil',
          content: 'Morning. I’ll try to do them. Thanks',
          time: '19:32',
          isUser: false,
        },
    ]);

    const [selectedMessageId, setSelectedMessageId] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [reply, setReply] = useState(null);
    const messagesEndRef = useRef();
    const sendMessageRef = useRef();


    useEffect(() => {
        setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
            setIsLoading(false)
          }, 1000);
    }, [])

    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
          setMessages([...messages, {
            id: messages.length + 2,
            sender: 'You',
            content: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false, }),
            isUser: true,
            replyContent: reply !== null ? reply.content : '',
          }]);
          setNewMessage("");
          setReply(null);
          setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
          }, 100);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSendMessage();
        }
    };

    const handleDeleteMessage = (id) => {
        setMessages(messages.filter(message => message.id !== id));
    };

    const handleReply = (data) => {
        sendMessageRef.current.focus();
        setReply(data)
    }

    return(
        <>
            <div className="flex flex-row items-center border-b border-gray74 px-6 py-4">
                <button onClick={() => closeChat(false)}>
                    <img src={backIcon} alt="back" className="w-6 h-6" />
                </button>
                <div className="flex flex-col ml-3 max-w-[85%]">
                    <h3 className="text-base font-medium text-blue">I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]</h3>
                    <span className="text-xs text-gray">3 Participants</span>
                </div>
                <button onClick={() => closeChat(false)} className="ml-auto">
                    <img src={closeIcon} alt="back" className="w-3.5 h-3.5" />
                </button>
            </div>
            <div className="flex-1 overflow-y-auto pl-6 pr-4">
                {
                    messages.map((item, index) => {
                        return(
                            <div key={item.id}>
                                { 
                                    item.date && (
                                        <div className="flex justify-center items-center text-gray font-semibold text-sm mt-4">
                                            <hr className="flex-1 border-gray" />
                                            <span className="px-6">{item.date}</span>
                                            <hr className="flex-1 border-gray" />
                                        </div>
                                    )
                                }
                                { 
                                    index === 4 && (
                                        <div className="flex justify-center items-center text-red font-semibold text-sm mt-4">
                                            <hr className="flex-1 border-red" />
                                            <span className="px-6">New Message</span>
                                            <hr className="flex-1 border-red" />
                                        </div>
                                    )
                                }
                                <ChatBubble 
                                    data={item}
                                    isSelected={selectedMessageId === item.id} 
                                    onMoreClick={() => setSelectedMessageId(selectedMessageId === item.id ? null : item.id)} 
                                    onDeleteMessage={handleDeleteMessage}
                                    onReply={handleReply}
                                 />
                            </div>
                        )
                    })
                }
                <div ref={messagesEndRef} />
            </div>
            <div className="px-4 py-4 pt-2">
                {
                    isLoading &&
                        <div className="bg-light-blue h-[54.41px] rounded-[5px] px-4 mb-2 flex flex-row items-center">
                            <div className="border-light-gray h-[24px] w-[24px] animate-spin rounded-full border-[3px] border-t-blue border-r-blue" />
                            <p className="text-xs text-gray ml-4 font-semibold">Please wait while we connect you with other participants ...</p>
                        </div>
                }
                <div className="flex flex-row">
                    <div className="relative flex flex-1">
                        {
                            reply !== null &&
                            <div className="absolute bottom-10 w-full border border-gray51 border-b-0 rounded-t-[5px] p-3 bg-gray95">
                                <div className="flex flex-row items-center justify-between">
                                    <p className="text-gray text-xs font-semibold">Replying to {reply.sender}</p>
                                    <img src={closeIcon} alt="close" className="w-3 h-3 cursor-pointer" onClick={() => setReply(null)} />
                                </div>
                                <p className="text-gray text-xs mt-1">{reply.content}</p>
                            </div>
                        }
                        <input
                            ref={sendMessageRef}
                            type="text"
                            placeholder="Type a new message"
                            className={`px-3 text-sm placeholder:text-dark-gray ${reply !== null ? 'rounded-b-[5px]' : 'rounded-[5px]'} py-1 w-full border border-gray51 focus:outline-none focus:ring-0 focus:border-gray51 text-black`}
                            value={newMessage}
                            onChange={e => setNewMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <button onClick={handleSendMessage} className="ml-3 w-[76px] h-[40px] bg-blue hover:bg-dark-blue text-sm text-white font-regular rounded-[5px] break-words">Send</button>
                </div>
            </div>
        </>
    )
}

export default ChatDetail