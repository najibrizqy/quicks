import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import downIcon from './../assets/images/down.png';
import upIcon from './../assets/images/up.png';
import moreIcon from './../assets/images/more.png';
import clockIcon from './../assets/images/clock.svg';
import calendarIcon from './../assets/images/calendar.png';
import pencilIcon from './../assets/images/pencil.png';
import checkOutlineIcon from './../assets/images/check_outline.png';
import checkedIcon from './../assets/images/checked.png';

const TaskCard = ({data, handleDone}) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isExpanded, setIsExpanded] = useState(data.isExpanded);

    const _handleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    const onDone = () => {
        handleDone(data.id);
        setIsExpanded(data.isDone ? false : true);
    }

    return (
        <div className="flex flex-row items-start border-b border-gray51 py-3">
            <img src={data.isDone ? checkedIcon : checkOutlineIcon} alt="checked" className="w-[18px] h-[18px] cursor-pointer" onClick={onDone} />
            <div className="flex flex-1 flex-col pb-2 ml-5">
              <div className="flex flex-row items-start cursor-pointer" onClick={_handleExpand}>
                <p className={`${data.isDone && 'line-through text-gray51 text-xs'} text-sm text-gray font-medium max-w-[50%]`}>{data.title}</p>
                <p className="text-red text-xs ml-auto ">2 Days Left</p>
                <p className="text-gray ml-4 text-xs">12/06/2021</p>
                <img src={isExpanded ? upIcon : downIcon} alt="down" className="w-5 h-5 ml-3" />
                <button>
                  <img src={moreIcon} alt="more" className="w-4 h-4 ml-3"  />
                </button>
              </div>
              {
                isExpanded &&
                <>
                    <div className="flex flex-row items-center mt-3">
                        <img src={clockIcon} alt="time" className="w-5 h-5" />
                        <div className="w-[193px] h-[40px] rounded-[5px] border border-gray51 ml-4 flex flex-row items-center pr-3">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="dd/MM/yyyy"
                            fixedHeight={true}
                            className="rounded-md px-3 py-2 w-full focus:outline-none focus:ring-0 focus:border-transparent h-[35px] text-sm text-gray"
                            placeholderText="Set Date"
                        />
                        <img src={calendarIcon} alt="calendar" className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="flex flex-row items-start mt-3">
                        <img src={pencilIcon} alt="edit" className="w-4 h-4" />
                        <p className="text-sm text-gray ml-5">{data.description}</p>
                    </div>
                </>
              }
            </div>
          </div>
    )
}

export default TaskCard