import React, { useState } from 'react';
import moreIcon from './../assets/images/more.png';

const ChatBubble = ({data, isSelected, onMoreClick}) => {
    return (
        <div className={`flex flex-col ${data.isUser ? 'items-end' : 'items-start'} mt-2`}>
            <h5 className={`${data.isUser ? 'text-dark-purple' : data.sender === 'Mary Hilda' ? 'text-gold' : 'text-green'} text-sm font-medium mb-0.5`}>{data.sender}</h5>
            <div className={`flex flex-row items-start ${data.isUser ? 'justify-end' : 'justify-start'}`}>
                {
                    data.isUser &&
                    <div className="relative">
                        <button onClick={onMoreClick}>
                            <img src={moreIcon} alt="more" className="w-4 h-4 mr-2" />
                        </button>
                        {isSelected && (
                        <div className="absolute left-0 top-4 border border-gray74 rounded-[5px] w-[126px] h-[80px] bg-white flex flex-col">
                            <div className="flex items-center px-4 flex-1 rounded-t-[5px] border-b border-gray74 cursor-pointer hover:bg-light-gray">
                                <p className="text-sm text-blue">Edit</p>
                            </div>
                            <div className="flex items-center px-4 flex-1 rounded-b-[5px] cursor-pointer hover:bg-light-gray">
                                <p className="text-sm text-red">Delete</p>
                            </div>
                        </div>
                        )}
                    </div>
                }
                <div className={`${data.isUser ? 'bg-light-purple' : data.sender === 'Mary Hilda' ? 'bg-cream' : 'bg-light-green'} px-3 p-2 rounded-[5px] text-gray max-w-[26rem]`}>
                    <p className="text-sm">{data.content}</p>
                    <p className="text-xs mt-1">{data.time}</p>
                </div>
                {
                    !data.isUser &&
                        <button>
                            <img src={moreIcon} alt="more" className="w-4 h-4 ml-2" />
                        </button>
                }
            </div>
        </div>
    )
}

export default ChatBubble;