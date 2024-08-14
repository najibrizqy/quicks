import React, { useState } from 'react'
import backIcon from './../assets/images/back.png';
import closeIcon from './../assets/images/close.png';
import moreIcon from './../assets/images/more.png';

const ChatDetail = ({closeChat}) => {
    const [messages, setMessages] = useState([
        {
          id: 1,
          sender: 'You',
          content: 'No worries. It will be completed ASAP. I’ve asked him yesterday.',
          time: '19:32',
          date: 'Today June 09, 2021',
          isUser: true,
        },
        {
          id: 2,
          sender: 'Mary Hilda',
          content: 'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
          time: '19:32',
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
    
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
          setMessages([...messages, {
            id: messages.length + 1,
            sender: 'You',
            content: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isUser: true,
          }]);
          setNewMessage("");
        }
    };

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
                    messages.map(item => {
                        return(
                            <div key={item.id} className={`flex flex-col ${item.isUser ? 'items-end' : 'items-start'} mt-2`}>
                                <h5 className={`${item.isUser ? 'text-dark-purple' : item.sender === 'Mary Hilda' ? 'text-gold' : 'text-green'} text-sm font-medium mb-0.5`}>{item.sender}</h5>
                                <div className="flex flex-row items-start justify-end">
                                    {
                                        item.isUser &&
                                            <button>
                                                <img src={moreIcon} alt="more" className="w-4 h-4 mr-2" />
                                            </button>
                                    }
                                    <div className={`${item.isUser ? 'bg-light-purple' : item.sender === 'Mary Hilda' ? 'bg-cream' : 'bg-light-green'} px-3 p-2 rounded-[5px] text-gray max-w-[33vw]`}>
                                        <p className="text-sm">{item.content}</p>
                                        <p className="text-xs mt-1">{item.time}</p>
                                    </div>
                                    {
                                        !item.isUser &&
                                            <button>
                                                <img src={moreIcon} alt="more" className="w-4 h-4 ml-2" />
                                            </button>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                {/* <div className="flex flex-col items-start mt-2">
                    <h5 className="text-gold text-sm font-medium mb-0.5">Mary Hilda</h5>
                    <div className="flex flex-row items-start">
                        <div className="bg-cream px-3 p-2 rounded-[5px] text-gray max-w-[85%]">
                            <p className="text-sm">Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.</p>
                            <p className="text-xs mt-1">19:32</p>
                        </div>
                        <button>
                            <img src={moreIcon} alt="more" className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-start mt-2">
                    <h5 className="text-green text-sm font-medium mb-0.5">Obaidullah Amarkhil</h5>
                    <div className="flex flex-row items-start">
                        <div className="bg-light-green px-3 p-2 rounded-[5px] text-gray max-w-[85%]">
                            <p className="text-sm">Morning. I’ll try to do them. Thanks</p>
                            <p className="text-xs mt-1">19:32</p>
                        </div>
                        <button>
                            <img src={moreIcon} alt="more" className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div> */}
            </div>
            <div className="px-4 py-4 pt-2 flex flex-row">
                <input
                    type="text"
                    placeholder="Type a new message"
                    className="px-4 text-sm placeholder:text-dark-gray rounded-[5px] py-1 w-full border border-gray51 rounded-[5px] focus:outline-none focus:ring-0 focus:border-gray51 text-black"
                    onChange={e => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage} className="ml-3 w-[76px] h-[40px] bg-blue hover:bg-dark-blue text-sm text-white font-regular rounded-[5px] break-words">Send</button>
            </div>
        </>
    )
}

export default ChatDetail