import React, { useEffect, useState } from 'react';
import searchIcon from './../assets/images/search.png';
import InboxCard from './InboxCard';

const Inbox = ({ showInbox, firstOpen }) => {
  const [isLoading, setIsLoading] = useState(true)
  const listMessages = [
    {id: 1, title: '109220-Naturalization', date: 'January 1,2021 19:10', lastMessanger: 'Cameron Phillips', lastMessage: 'Please check this out!', isUnread: true, isGroup: true},
    {id: 2, title: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]', date: '02/06/2021 10:45', lastMessanger: 'Ellen', lastMessage: 'Hey, please read.', isUnread: false, isGroup: true},
    {id: 3, title: '8405-Diana SALAZAR MUNGUIA', date: '01/06/2021 12:19', lastMessanger: 'Cameron Phillips', lastMessage: 'I understand your initial concerns and thats very valid, Elizabeth. But you ...', isUnread: false, isGroup: true},
    {id: 4, title: 'FastVisa Support', date: '01/06/2021 12:19', lastMessanger: '', lastMessage: 'Hey there! Welcome to your inbox.', isUnread: false, isGroup: false},
  ]

  useEffect(() => {
    if (firstOpen) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    }
  }, [firstOpen])

  return (
    <div className={`absolute transition-all duration-300 ${showInbox ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-4 z-0'} bg-white rounded shadow-lg w-[73vh] h-[75vh] max-w-[708px] max-h-[726px] flex flex-col`}>
      <div className="flex ml-6 mr-8 mb-1 mt-4 rounded-[5px] px-14 justify-between items-center border border-gray51">
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
          listMessages.map(item => {
            return(
              <InboxCard data={item} key={item.id} />
            )
          })
      }
    </div>
  );
}

export default Inbox;