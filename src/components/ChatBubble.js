import React, { useRef, useEffect } from 'react';
import moreIcon from './../assets/images/more.png';
import MorePopup from './MorePopup';

const ChatBubble = ({data, isSelected, onMoreClick, onDeleteMessage}) => {
    const popupRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onMoreClick(); 
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onMoreClick]);

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
                            <MorePopup ref={popupRef} isUser={data.isUser} onDelete={() => onDeleteMessage(data.id)}/>
                        )}
                    </div>
                }
                <div className={`${data.isUser ? 'bg-light-purple' : data.sender === 'Mary Hilda' ? 'bg-cream' : 'bg-light-green'} px-3 p-2 rounded-[5px] text-gray max-w-[26rem] min-w-24`}>
                    <p className="text-sm">{data.content}</p>
                    <p className="text-xs mt-1">{data.time}</p>
                </div>
                {
                    !data.isUser &&
                    <div className='relative'>
                        <button onClick={onMoreClick}>
                            <img src={moreIcon} alt="more" className="w-4 h-4 ml-2" />
                        </button>
                         {isSelected && (
                            <MorePopup ref={popupRef} isUser={data.isUser} onDelete={() => onDeleteMessage(data.id)}/>
                        )}
                    </div>
                }
            </div>
        </div>
    )
}

export default ChatBubble;
