import React, { useEffect, useState, useMemo } from 'react'
import searchIcon from './../assets/images/search.png';
import MessageCard from './MessageCard';

const MessagesList = ({isLoading, openChat}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const listMessages = useMemo(() => [
        {id: 1, title: '109220-Naturalization', date: 'January 1,2021 19:10', lastMessanger: 'Cameron Phillips', lastMessage: 'Please check this out!', isUnread: true, isGroup: true},
        {id: 2, title: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]', date: '02/06/2021 10:45', lastMessanger: 'Ellen', lastMessage: 'Hey, please read.', isUnread: false, isGroup: true},
        {id: 3, title: '8405-Diana SALAZAR MUNGUIA', date: '01/06/2021 12:19', lastMessanger: 'Cameron Phillips', lastMessage: 'I understand your initial concerns and thats very valid, Elizabeth. But you ...', isUnread: false, isGroup: true},
        {id: 4, title: 'FastVisa Support', date: '01/06/2021 12:19', lastMessanger: '', lastMessage: 'Hey there! Welcome to your inbox.', isUnread: false, isGroup: false},
    ], []);
    const [resultMessages, setResultMessages] = useState(listMessages);

    // Debounced handleSearch function
    useEffect(() => {
        const handler = setTimeout(() => {
        if (searchQuery.trim() === '') {
            setResultMessages(listMessages);
        } else {
            const newData = listMessages.filter(x =>
            x.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setResultMessages(newData);
        }
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery, listMessages]);

    const _handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return(
        <>
            <div className="flex ml-6 mr-8 mb-1 mt-4 rounded-[5px] px-14 justify-between items-center border border-gray51">
                <input
                    type="text"
                    placeholder="Search"
                    className="pr-2 text-sm placeholder:text-dark-gray rounded-[5px] py-1 w-full focus:outline-none focus:ring-0 focus:border-transparent text-black"
                    onChange={_handleSearch}
                />
                <button>
                    <img src={searchIcon} alt="Inbox" className="h-[12px] w-[12px]" />
                </button>
            </div>
            {
                isLoading ?
                <div className="flex flex-1 justify-center items-center">
                    <div className="text-center flex flex-col items-center mb-20">
                        <div className="border-light-gray h-[50px] w-[50px] animate-spin rounded-full border-[6px] border-t-gray77 border-r-gray77" />
                        <p className="text-gray text-base mt-4">Loading Chats ...</p>
                    </div>
                </div>
                :
                resultMessages.map(item => {
                    return(
                        <MessageCard data={item} key={item.id} openChat={openChat} />
                    )
                })
            }
        </>
    )
}

export default MessagesList