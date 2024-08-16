import React, { forwardRef } from "react";

const MorePopup = forwardRef(({ isUser, onDelete }, ref) => {
    return (
        <div className={`absolute ${isUser ? 'left-0' : 'right-0'} top-4 border border-gray74 rounded-[5px] w-[126px] h-[80px] bg-white flex flex-col`} ref={ref}>  
            {
                isUser ?
                <>
                    <div className="flex items-center px-4 flex-1 rounded-t-[5px] border-b border-gray74 cursor-pointer hover:bg-light-gray">
                        <p className="text-sm text-blue">Edit</p>
                    </div>
                    <div className="flex items-center px-4 flex-1 rounded-b-[5px] cursor-pointer hover:bg-light-gray" onClick={onDelete}>
                        <p className="text-sm text-red">Delete</p>
                    </div> 
                </>
                :
                <>
                    <div className="flex items-center px-4 flex-1 rounded-t-[5px] border-b border-gray74 cursor-pointer hover:bg-light-gray">
                        <p className="text-sm text-blue">Share</p>
                    </div>
                    <div className="flex items-center px-4 flex-1 rounded-b-[5px] cursor-pointer hover:bg-light-gray">
                        <p className="text-sm text-blue">Reply</p>
                    </div> 
                </>
            }
        </div>
    )
});

export default MorePopup;
