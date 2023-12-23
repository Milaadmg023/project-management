import React from 'react'
import { FaX } from "react-icons/fa6";
import SavedContext from '../../../Context/savedContaxt';

function SavedTask(task) {
  const {savedTasks , setSavedTasks} = React.useContext(SavedContext)

  const DeleteHandler=(task)=>{
    const updatedTasks = savedTasks.filter(item => item !== task);
    setSavedTasks(updatedTasks);
  }
  return (
     <>
     <div className="card__container bg-purple-500 w-fit p-2 rounded-[10%] text-center flex flex-col gap-2 max-w-[14vw] my-1 mx-auto h-[28vh]">
      <div className="card__header text-white flex justify-end">
          <FaX className='cursor-pointer' onClick={()=>DeleteHandler(task.value)}/>
      </div>
      <p className="text-white">{task.value.title}</p>
      <div className="card__body flex font-bold py-2 px-6 rounded-[50px] bg-white gap-2">
       <div className="job">Time: {task.value.time}</div>
       <div className="tasks__num flex items-center">
         <p>Progress: {task.value.progress}</p>
       </div>
      </div>
      <div className="card__footer">
       <button type="button" className="text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0  py-2 px-8">
         See Progress
       </button>
      </div>
     </div>
     </>
  )
}

export default SavedTask