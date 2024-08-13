import React, { useEffect, useState } from 'react';

const Tasks = ({showTasks, firstOpen}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(firstOpen){
          setTimeout(() => {
            setIsLoading(false)
          }, 1000);
        }
      }, [firstOpen])

  return (
    <div className={`transition-all duration-300 ${showTasks ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} bg-white p-4 px-6 rounded shadow-lg w-[73vh] h-[75vh] flex flex-col`}>
      <div className="flex rounded-[5px] pl-5 justify-between items-center mb-4">
        <div></div>
        <button className="w-[98.8px] h-[40px] bg-blue hover:bg-dark-blue text-white font-regular rounded-[5px] break-words">
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
          <div>
            
          </div>
      }
    </div> 
  );
}

export default Tasks;