import React from "react";
import membersData from "../../membersData";


const Tasks = (props) => {
  const filteredMembers = membersData.filter((data) => data.id === props.id);
  const [select, setSelect] = React.useState('');

  return (
    <div id="tasks" >
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
                    onChange={(e) => setSelect(e.target.value)}>
                    {membersData.map((data)=>{
                      return(
                        <option key={data.id} value={data.name} className="border-none">{data.name}</option>
                      )
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
            <div className="tasks-container">
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
