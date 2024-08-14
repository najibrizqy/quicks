import React from 'react';
import featherIcon from './../assets/images/feather_stroke.png';
import taskIcon from './../assets/images/task.png';
import inboxIcon from './../assets/images/inbox.png';

const FloatingButton = ({isExpanded, openTasks, openInbox, toggleExpand}) => {
    return (
        <div className="flex space-x-4 items-end mt-3">
            <div className={`transition-all duration-300 ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} flex flex-row items-center space-x-4`}>
                <div className={`flex flex-col items-center ${!isExpanded && 'hidden'}`}>
                    <span className={`text-white text-sm mb-2`}>Task</span>
                    <button onClick={openTasks} className="flex items-center justify-center bg-white p-4 w-[60px] h-[60px] rounded-full">
                        <img src={taskIcon} alt="Task" className="h-6 w-6" />
                    </button>
                </div>
                <div className={`flex flex-col items-center ${!isExpanded && 'hidden'}`}>
                    <span className="text-white text-sm mb-2">Inbox</span>
                    <button onClick={openInbox} className="flex items-center justify-center bg-white p-4 w-[60px] h-[60px] rounded-full">
                        <img src={inboxIcon} alt="Inbox" className="h-6 w-6" />
                    </button>
                </div>
            </div>
            <button onClick={toggleExpand} className="flex items-center justify-center bg-blue text-white w-[68px] h-[68px] rounded-full cursor-pointer relative">
                <img src={featherIcon} alt="Search" className="h-8 w-[18px]" /> 
            </button>
        </div>
    )
}

export default FloatingButton;