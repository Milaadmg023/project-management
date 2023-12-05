import React from "react";
import { FaFilter } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import membersData from "../../membersData";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea
} from "@material-tailwind/react";
import {
  FaTrash,
  FaBookmark,
  FaCommentAlt,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import Tasks from "./Tasks";
import './Users/users-style.css'
import { Message } from "./Users/Message";



const Users = () => {
  const [id , setId] = React.useState('')
  const ShowHandler = (userId) => {
    setId(userId)
  };
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <section>
        <div className="text-white">
          <div className="filter flex justify-between px-4 pt-3 items-center">
            <p className="p-1">
              Sort by: <span className="bg-gray-600 rounded px-1">Date</span>
            </p>
            <div className="icons flex gap-2">
              <LuSettings2 size={20} className="cursor-pointer" />
              <FaFilter size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className="users-container py-2 h-[1000px]">
            {membersData.map((data) => {
              return (
                <div
                  className="grid-rows-2 m-2 bg-gray-500 rounded-md"
                  onClick={() => ShowHandler(data.id)}
                >
                  <div className="flex">
                    <img
                      src={data.profile}
                      alt="profile img"
                      className="h-14 m-1"
                    />
                    <div>
                      <span>{data.name}</span>
                      <h3 className="text-gray-400 self-end mt-3">
                        {data.describe}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <SpeedDial placement="right">
                      <SpeedDialHandler>
                        <IconButton className="rounded-full bg-gray-600 p-1">
                          <GoPlus className="h-5 w-5 transition-transform group-hover:rotate-45" />
                        </IconButton>
                      </SpeedDialHandler>
                      <SpeedDialContent>
                        <SpeedDialAction className="m-[1px]">
                          <FaTrash size={15} className="text-gray-800" />
                        </SpeedDialAction>
                        <SpeedDialAction className="m-[1px]">
                          <FaCommentAlt onClick={handleOpen} variant="gradient" size={15} className="text-gray-800" />
                        </SpeedDialAction>
                        <SpeedDialAction className="m-[1px]">
                          <FaCloudDownloadAlt
                            size={15}
                            className="text-gray-800"
                          />
                        </SpeedDialAction>
                        <SpeedDialAction className="m-[1px]">
                          <FaBookmark size={15} className="text-gray-800" />
                        </SpeedDialAction>
                      </SpeedDialContent>
                    </SpeedDial>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Tasks id={id}/>
      
      <Dialog open={open} handler={handleOpen} className="chat-page w-[25%] mx-auto rounded-[10px] border border-gray-900 p-2 mt-10" >
        <div className="main border rounded-[29px] mb-2 h-[20rem]"></div>
        <Message/>
      </Dialog>
    </>
  );
};

export default Users;