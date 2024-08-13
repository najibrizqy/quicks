import React from 'react';
import taskIcon from './../assets/images/task.png';
import inboxWhiteIcon from './../assets/images/inbox_white.png';
import taskWhiteIcon from './../assets/images/task_white.png';
import inboxIcon from './../assets/images/inbox.png';

const ActiveFloatingButton = ({openTasks, openInbox, showInbox, showTasks}) => {
    return (
        <div className="flex space-x-4 items-end">
            <div className={`transition-all duration-300 flex flex-row items-center mt-3 space-x-8`}>
                <button onClick={showInbox ? openTasks : openInbox} className="flex items-center justify-center bg-gray95 p-4 w-[60px] h-[60px] rounded-full">
                    <img src={showInbox ? taskIcon : inboxIcon} alt="Task" className="h-[26px] w-[26px]" />
                </button>
                <div className="relative">
                    <div className="absolute top-0 left-[-14px] w-[68px] h-[68px] rounded-full bg-gray z-0"></div>
                    <button onClick={showInbox ? openInbox : openTasks} className={`relative flex items-center justify-center z-10 ${showInbox ? 'bg-purple' : 'bg-rajah'} p-4 w-[68px] h-[68px] rounded-full`}>
                        <img src={showInbox ? inboxWhiteIcon : taskWhiteIcon} alt="Inbox" className={showInbox ? "h-[30px] w-[30px]" : "h-[26px] w-[26px]"} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ActiveFloatingButton;