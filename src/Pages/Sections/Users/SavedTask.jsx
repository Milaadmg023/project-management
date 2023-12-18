import React from 'react'
import { IoIosGitNetwork } from "react-icons/io";
import { FaX } from "react-icons/fa6";


function SavedTask() {
  return (
     <>
     <div className="card__container bg-purple-500 w-fit p-2 rounded-[10%] text-center flex flex-col gap-2">
      <div className="card__header text-white flex justify-end">
          <FaX/>
      </div>
      <p className="text-white">John Doe</p>
      <div className="card__body flex font-bold py-2 px-6 rounded-[50px] bg-white gap-2">
       <div className="job">Time : 9/15</div>
       <div className="tasks__num flex items-center">
         <IoIosGitNetwork/>
         <p>Progress: 25%</p>
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