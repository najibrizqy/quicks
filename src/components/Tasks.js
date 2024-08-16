import React, { useEffect, useState, useRef } from 'react';
import downIcon from './../assets/images/down.png';
import TaskCard from './TaskCard';

const Tasks = ({ showTasks, firstOpen }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showCategory, setShowCategory] = useState(false)
  const [listTasks, setListTasks] = useState([
    {
      id: 1, 
      title: 'Close off Case #012920- RODRIGUES, Amiguel', 
      date: new Date(2024, 7, 25), 
      description: 'Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!', 
      isExpanded: true, 
      isDone: false,
    },
    {
      id: 2, 
      title: 'Set up appointment with Dr Blake', 
      date: new Date(2024, 7, 30), 
      description: '', 
      isExpanded: true, 
      isDone: false,
    },
    {
      id: 3, 
      title: 'Contact Mr Caleb - video conference?', 
      date: new Date(2024, 7, 16), 
      description: '', 
      isExpanded: false, 
      isDone: true,
    },
    {
      id: 4, 
      title: 'Assign 3 homework to Client A', 
      date: new Date(2024, 7, 15), 
      description: '', 
      isExpanded: false, 
      isDone: true,
    },
  ])
  const tasksEndRef = useRef();

  useEffect(() => {
    if (firstOpen) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    }
  }, [firstOpen])

  const handleDone = (id) => {
    const newData = listTasks.map(x => {
      if(x.id === id){
        x.isDone = !x.isDone;
        x.isExpanded = false;
      }
      return x
    })
    setListTasks(newData)
  }

  const _handleNewTask = () => {
    const newTask = {
      id: listTasks.length + 2, 
      title: '', 
      date: null, 
      description: '', 
      isExpanded: true, 
      isDone: false,
    }
    setListTasks([...listTasks, newTask])
    setTimeout(() => {
      tasksEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100);
  }

  const handleDeleteTask = (id) => {
    setListTasks(listTasks.filter(tasks => tasks.id !== id));
  };

  return (
    <div className={`transition-all duration-300 ${showTasks ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} bg-white pt-4 pb-1 rounded shadow-lg w-[73vh] h-[75vh] max-w-[708px] max-h-[726px] flex flex-col`}>
      <div className="flex rounded-[5px] pl-20 justify-between items-center mb-2 px-6">
        <div className="relative">
          <button className="w-[118.55px] h-[40px] border border-gray51 rounded-[5px] text-gray font-medium flex flex-row items-end justify-center pb-2.5" onClick={() => setShowCategory(!showCategory)}>
            My Tasks
            <img src={downIcon} alt="more" className="w-[20px] h-[20px] ml-1" />
          </button>
          {
            showCategory &&
            <div className="absolute top-12 left-[-60px] w-[288px] h-[80px] z-10 rounded-[5px] border border-gray51 bg-white flex flex-col">  
              <div className="flex items-center px-4 flex-1 rounded-t-[5px] border-b border-gray51 cursor-pointer hover:bg-light-gray" onClick={() => setShowCategory(false)}>
                  <p className="text-base text-gray font-medium">Personal Errands</p>
              </div>
              <div className="flex items-center px-4 flex-1 rounded-b-[5px] cursor-pointer hover:bg-light-gray" onClick={() => setShowCategory(false)}>
                  <p className="text-base text-gray font-medium">Urgent To-Do</p>
              </div> 
            </div>
          }
        </div>
        <button className="w-[98.8px] h-[40px] bg-blue hover:bg-dark-blue text-white font-medium rounded-[5px] break-words" onClick={_handleNewTask}>
          New Task
        </button>
      </div>
      {
        isLoading ?
          <div className="flex flex-1 justify-center items-center">
            <div className="text-center flex flex-col items-center mb-10">
              <div className="border-light-gray h-[50px] w-[50px] animate-spin rounded-full border-[6px] border-t-gray77 border-r-gray77" />
              <p className="text-gray text-base mt-4">Loading Tasks List ...</p>
            </div>
          </div>
          :
          <div className="flex-1 overflow-y-auto px-6">
            {
              listTasks.map(item => {
                return (
                  <TaskCard key={item.id} data={item} handleDone={handleDone} handleDelete={handleDeleteTask} />
                )
              })
            }
            <div ref={tasksEndRef} />
          </div>
      }
    </div>
  );
}

export default Tasks;