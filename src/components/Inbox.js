import React, { useEffect, useState } from 'react';
import searchIcon from './../assets/images/search.png';

const Inbox = ({ showInbox, firstOpen }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (firstOpen) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    }
  }, [firstOpen])

  return (
    <div className={`absolute transition-all duration-300 ${showInbox ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} bg-white p-4 px-6 rounded shadow-lg w-[73vh] h-[75vh] max-w-[708px] max-h-[726px] flex flex-col`}>
      <div className="flex rounded-[5px] px-14 justify-between items-center mb-4 border border-gray51">
        <input
          type="text"
          placeholder="Search"
          className="pr-2 text-sm placeholder:text-dark-gray rounded-[5px] py-1 w-full focus:outline-none focus:ring-0 focus:border-transparent text-black"
        />
        <button className="">
          <img src={searchIcon} alt="Inbox" className="h-[12px] w-[12px]" />
        </button>
      </div>
      {
        isLoading ?
          <div className="flex flex-1 justify-center items-center">
            <div className="text-center flex flex-col items-center mb-10">
              <div className="border-light-gray h-[50px] w-[50px] animate-spin rounded-full border-[6px] border-t-gray77 border-r-gray77" />
              <p className="text-gray text-base mt-4">Loading Chats ...</p>
            </div>
          </div>
          :
          <div>

          </div>
      }
    </div>
  );
}

export default Inbox;