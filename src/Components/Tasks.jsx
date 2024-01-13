import React from "react";
import membersData from "../membersData";
import tasksContext from './../Context/tasksContext';
import { FaBookmark } from "react-icons/fa";
import SavedContext from "../Context/savedContaxt";

const Tasks = (props) => {
  const filteredMembers = membersData.filter((data) => data.id === props.id);
  const [select, setSelect] = React.useState("");
  const { usersData, setUsersData } = React.useContext(tasksContext);
  const allTasks = usersData.usersTasks;
  const progressTasks = [];
  const recentTasks = [];
  for (const usertask of allTasks) {
    if (usertask.progress == 0) {
      recentTasks.push(usertask);
    }
  }
  for (const usertask of allTasks) {
    if (usertask.progress !== 0) {
      progressTasks.push(usertask);
    }
  }

  /*------Bookmark----------*/

  const {savedTasks , setSavedTasks} = React.useContext(SavedContext)
  const BookmarkHandler = (user) => {
    setSavedTasks((prevBookmarks) => [...prevBookmarks, user]);
  };

  return (
    <div className="bg-[#2A4C75] w-[80vw]">
      {filteredMembers.map((member) => {
        return (
          <div className="grid-rows-2 text-white">
            <div className="info-container flex justify-between p-6">
              <div>
                <h2>{member.describe}</h2>
                <p>{member.job}</p>
                <p>To : Milad Bageri</p>
                <div>
                  <label htmlFor="members">Cc: </label>
                  <select
                    className="rounded bg-gray-500 border-none"
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                  >
                    {membersData.map((data) => {
                      return (
                        <option
                          key={data.id}
                          value={data.name}
                          className="border-none"
                        >
                          {data.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <h3>{member.name}</h3>
                  <span>{member.lastSeen}</span>
                </div>
                <div>
                  <img src={member.profile} alt="" />
                </div>
              </div>
            </div>
            <p className="h-0.5 bg-white mx-auto w-5/6"></p>
            <div className="tasks-container border w-5/6 mx-auto mt-4 pb-[8rem] lg:pb-24 h-[90vh] rounded bg-white text-black p-2 grid grid-cols-1 lg:grid-cols-2 gap-2 overflow-y-auto">
              <div className="progress border rounded p-1 bg-gray-100">
                <div className="progress-header flex justify-between text-violet-900 bg-yellow-500 p-1 rounded">
                  <span>In Progress</span>
                  <span className="cursor-pointer">See All</span>
                </div>
                {progressTasks.map((data) => {
                  return (
                    <div className="task border border-gray-900 p-1 m-1 rounded bg-white">
                      <div className="task-header flex justify-between border border-gray-900 p-1 rounded m-0.5">
                        <span className="text-xl underline">{data.title}</span>
                        <FaBookmark size={30} className="cursor-pointer" onClick={()=>BookmarkHandler(data)}/>
                      </div>
                      <div className="task-body p-1 m-0.5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
                        </p>
                      </div>
                      <div className="text-footer flex justify-between p-1 m-0.5">
                        <p>
                          Delivery time : <span>{data.time}</span>
                        </p>
                        <p>
                          Progress : <span>{data.progress}%</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="recent border rounded p-1 bg-gray-100">
                <div className="recent-header flex justify-between text-violet-100 bg-blue-500 p-1 rounded">
                  <span className="cursor-pointer">Reacent Tasks</span>
                  <span className="cursor-pointer">See All</span>
                </div>
                {recentTasks.map((data) => {
                  return (
                    <div className="task border border-gray-900 p-1 m-1 rounded bg-white">
                      <div className="task-header flex justify-between border border-gray-900 p-1 rounded m-0.5">
                        <span className="text-xl underline">{data.title}</span>
                        <FaBookmark size={30} className="cursor-pointer" onClick={()=>BookmarkHandler(data)}/>
                      </div>
                      <div className="task-body p-1 m-0.5">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
                        </p>
                      </div>
                      <div className="text-footer flex justify-between p-1 m-0.5">
                        <p>
                          Delivery time : <span>{data.time}</span>
                        </p>
                        <p>
                          Progress : <span>{data.progress}%</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="all lg:col-span-2">
                <div className="all-header flex justify-between text-violet-900 bg-green-500 p-1 rounded">
                  <span className="cursor-pointer">All Tasks</span>
                  <span className="cursor-pointer">See More</span>
                </div>
                <div className="task-container flex flex-col md:grid md:grid-cols-2">
                  {allTasks.map((data) => {
                    return (
                      <div className="task border border-gray-900 p-1 m-1 rounded bg-white">
                        <div className="task-header flex justify-between border border-gray-900 p-1 rounded m-0.5">
                          <span className="text-xl underline">
                            {data.title}
                          </span>
                          <FaBookmark size={30} className="cursor-pointer" onClick={()=>BookmarkHandler(data)}/>
                        </div>
                        <div className="task-body p-1 m-0.5">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                          </p>
                        </div>
                        <div className="text-footer flex justify-between p-1 m-0.5">
                          <p>
                            Delivery time : <span>{data.time}</span>
                          </p>
                          <p>
                            Progress : <span>{data.progress}%</span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
