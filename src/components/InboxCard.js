import React from 'react';
import personIcon from './../assets/images/person.png';
import personGrayIcon from './../assets/images/person_gray.png';

const InboxCard = ({data}) => {

  return ( 
    <div className="flex flex-col pl-6 pr-8 pt-5 z-50 hover:bg-gray95 cursor-pointer">
      <div className="relative flex flex-row items-start">
        {
          data.isGroup ?
            <div className="relative">
              <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-gray88 z-0">
                <img src={personGrayIcon} alt="group" className="h-[24px] w-[24px]" />
              </div>
              <div className="absolute  top-0 right-[-16px] flex items-center justify-center z-10 bg-blue w-[34px] h-[34px] rounded-full">
                  <img src={personIcon} alt="group" className="h-[24px] w-[24px]" />
              </div>
            </div>
          :
            <div className="flex items-center justify-center ml-2.5 w-[34px] h-[34px] rounded-full bg-blue">
              <span className="text-sm text-white mb-2 font-semibold">F</span>
            </div>
        }
        <div className={`flex flex-col ${data.isGroup ? 'ml-8' : 'ml-[22px]'}`}>
          <div className="flex flex-row">
            <h4 className="text-sm text-blue font-medium max-w-[70%]">{data.title}</h4>
            <span className="text-xs text-gray ml-4">{data.date}</span>
          </div>
          {
            data.isGroup &&
              <span className="text-xs text-gray font-semibold">{data.lastMessanger} :</span>
          }
          <span className="text-xs text-gray">{data.lastMessage}</span>
        </div>
        {
          data.isUnread &&
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-red"></div>
        }
      </div>
      <div className="h-1 w-full border-b border-gray51 mt-7"></div>
    </div>
  );
}

export default InboxCard;