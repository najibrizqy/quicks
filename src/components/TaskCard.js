import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import downIcon from './../assets/images/down.png';
import upIcon from './../assets/images/up.png';
import moreIcon from './../assets/images/more.png';
import clockIcon from './../assets/images/clock.svg';
import clockGrayIcon from './../assets/images/clock_gray.png';
import calendarIcon from './../assets/images/calendar.png';
import pencilIcon from './../assets/images/pencil.png';
import pencilGrayIcon from './../assets/images/pencil_gray.png';
import checkOutlineIcon from './../assets/images/check_outline.png';
import checkedIcon from './../assets/images/checked.png';

const TaskCard = ({data, handleDone, handleDelete}) => {
    const [selectedDate, setSelectedDate] = useState(data.date);
    const [isExpanded, setIsExpanded] = useState(data.isExpanded);
    const [editDesc, setEditDesc] = useState(data.title.length === 0)
    const [description, setDescription] = useState(data.description)
    const [editTitle, setEditTitle] = useState(data.title.length === 0)
    const [title, setTitle] = useState(data.title)
    const [showDelete, setShowDelete] = useState(false)

    const _handleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    const onDone = () => {
        handleDone(data.id);
        setIsExpanded(data.isDone ? false : true);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          setEditDesc(false)
        }
    };

    const handleKeyDownTitle = (event) => {
        if (event.key === 'Enter') {
          setEditTitle(false)
        }
    };

    const countDaysLeft = moment(selectedDate).diff(new Date(), 'days');

    return (
        <div className="flex flex-row items-start border-b border-gray51 pt-4 pb-2">
            <img src={data.isDone ? checkedIcon : checkOutlineIcon} alt="checked" className="w-[18px] h-[18px] cursor-pointer" onClick={onDone} />
            <div className="flex flex-1 flex-col pb-2 ml-5">
              <div className="flex flex-row items-start">
                <div className="flex flex-1 flex-row items-start cursor-pointer" onClick={_handleExpand}>
                    {
                        editTitle ?
                            <input 
                                type="text" 
                                className="h-[40px] w-[380px] border border-gray51 rounded-[5px] relative z-50 text-sm text-gray font-medium px-3 pb-1" 
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) => setTitle(e.target.value)}
                                onKeyDown={handleKeyDownTitle}
                            />
                        :    
                            <p className={`${data.isDone && 'line-through text-gray51 text-xs'} text-sm text-gray font-medium max-w-[50%]`}>{title}</p>
                    }
                    {
                        !data.isDone && selectedDate !== null && !editTitle ?
                            <p className="text-red text-xs ml-auto ">{countDaysLeft === 0 ? 'Due Today' : countDaysLeft < 0 ? 'Overdue' : countDaysLeft + ' Days Left'}</p>
                        : <div className="ml-auto"></div>
                    }
                    <p className="text-gray ml-4 text-xs">{selectedDate !== null && !editTitle && moment(selectedDate).format('DD/MM/YYYY')}</p>
                    <img src={isExpanded ? upIcon : downIcon} alt="down" className="w-5 h-5 ml-3" />
                </div>
                <div className="relative">
                    <img src={moreIcon} alt="more" className="w-4 h-4 ml-3 cursor-pointer" onClick={() => setShowDelete(true)}  />
                    {
                        showDelete &&
                            <div className="absolute top-5 right-0 w-[126px] h-[42px] z-50 rounded-[5px] border border-gray51 bg-white flex flex-col">  
                                <div className="flex items-center px-4 flex-1 rounded-[5px] cursor-pointer hover:bg-light-gray" onClick={() => handleDelete(data.id)}>
                                    <p className="text-base text-red">Delete</p>
                                </div>
                            </div>
                    }
                </div>
              </div>
              {
                isExpanded &&
                <>
                    <div className="flex flex-row items-center mt-3">
                        <img src={selectedDate === null ? clockGrayIcon : clockIcon} alt="time" className="w-5 h-5" />
                        <div className="w-[193px] h-[40px] rounded-[5px] border border-gray51 ml-4 flex flex-row items-center pr-3">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                fixedHeight={true}
                                minDate={new Date()}
                                className="rounded-md px-3 py-2 w-full focus:outline-none focus:ring-0 focus:border-transparent h-[35px] text-sm text-gray"
                                placeholderText="Set Date"
                            />
                            <img src={calendarIcon} alt="calendar" className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="flex flex-row items-start mt-3">
                        <img src={description.length > 0 ? pencilIcon : pencilGrayIcon} alt="edit" className="w-4 h-4 cursor-pointer" onClick={() => setEditDesc(true)} />
                        {
                            editDesc ?
                                <textarea
                                    className="w-full border border-gray51 outline-none text-gray rounded-[5px] ml-5 text-sm p-2 resize-none"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                            :
                                <p className="text-sm text-gray ml-5">{description.length > 0 ? description : 'No Description'}</p>
                        }
                    </div>
                </>
              }
            </div>
          </div>
    )
}

export default TaskCard