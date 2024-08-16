import React, { useEffect, useState } from 'react';
import downIcon from './../assets/images/down.png';
import TaskCard from './TaskCard';

const Tasks = ({ showTasks, firstOpen }) => {
  const [isLoading, setIsLoading] = useState(true)
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
      title: 'Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203', 
      date: new Date(2024, 7, 28), 
      description: 'All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.', 
      isExpanded: true, 
      isDone: false,
    },
    {
      id: 3, 
      title: 'Set up appointment with Dr Blake', 
      date: new Date(2024, 7, 30), 
      description: 'No Description', 
      isExpanded: true, 
      isDone: false,
    },
    {
      id: 4, 
      title: 'Contact Mr Caleb - video conference?', 
      date: new Date(2024, 7, 16), 
      description: 'No Description', 
      isExpanded: false, 
      isDone: true,
    },
    {
      id: 5, 
      title: 'Assign 3 homework to Client A', 
      date: new Date(2024, 7, 15), 
      description: 'No Description', 
      isExpanded: false, 
      isDone: true,
    },
  ])

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

  return (
    <div className={`transition-all duration-300 ${showTasks ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} bg-white py-4 rounded shadow-lg w-[73vh] h-[75vh] max-w-[708px] max-h-[726px] flex flex-col`}>
      <div className="flex rounded-[5px] pl-20 justify-between items-center mb-2 px-6">
        <button className="w-[118.55px] h-[40px] border border-gray51 rounded-[5px] text-gray font-medium flex flex-row items-end justify-center pb-2.5">
          My Tasks
          <img src={downIcon} alt="more" className="w-[20px] h-[20px] ml-1" />
        </button>
        <button className="w-[98.8px] h-[40px] bg-blue hover:bg-dark-blue text-white font-medium rounded-[5px] break-words">
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
                  <TaskCard key={item.id} data={item} handleDone={handleDone} />
                )
              })
            }
          </div>
      }
    </div>
  );
}

export default Tasks;