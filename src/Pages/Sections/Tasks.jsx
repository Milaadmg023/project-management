import React from "react";
import membersData from "../../membersData";
import { IoMdMore } from "react-icons/io";

const Tasks = (props) => {
  const filteredMembers = membersData.filter((data) => data.id === props.id);
  const [select, setSelect] = React.useState("");

  return (
    <div id="tasks">
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
            <div className="tasks-container border w-5/6 mx-auto my-4 h-[75vh] rounded bg-white text-black p-2 grid grid-cols-2 gap-2">
              <div className="progress border rounded p-1 bg-gray-300">
                <div className="progress-header flex justify-between text-violet-700">
                  <span>In Progress</span>
                  <span className="cursor-pointer">See All</span>
                </div>
                <div className="task border p-1 m-1 rounded bg-gray-500 text-white">
                  <div className="task-header flex justify-between">
                    <span className="text-xl">Fixing Header Icons</span>
                    <IoMdMore size={30} className="cursor-pointer" />
                  </div>
                  <div className="task-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div className="text-footer">

                  </div>
                </div>
              </div>
              <div className="recent">
                <div className="progress-header flex justify-between text-violet-700">
                  <span className="cursor-pointer">Reacent Tasks</span>
                  <span className="cursor-pointer">See All</span>
                </div>
              </div>
              <div className="all col-span-2">
                <div className="progress-header flex justify-between text-violet-700">
                  <span className="cursor-pointer">All Tasks</span>
                  <span className="cursor-pointer">See More</span>
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
