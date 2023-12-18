import React from "react";
import { FaFilter, FaX } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import membersData from "../../membersData";
import { Dialog, Drawer } from "@material-tailwind/react";
import {
  FaTrash,
  FaBookmark,
  FaCommentAlt,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import Tasks from "./Tasks";
import "./Users/users-style.css";
import Message from "./Users/Message";
import DeleteBtn from "./Users/DeleteBtn.jsx";
import UserContext from "../../Context/tasksContext.jsx";
import modalsContext from "../../Context/modalsContext.jsx";

const Users = () => {
  const { usersData, setUsersData } = React.useContext(UserContext);

  const [id, setId] = React.useState("");
  const ShowHandler = (userId) => {
    setId(userId);
  };

  /*----Delete Alert Handler----*/

  const { modalStatus, setModalStatus } = React.useContext(modalsContext);
  const deleteHandler = () => {
    setModalStatus(!modalStatus);
  };

  /*----Bookmark Alert Handler----*/

  const [saveAlert, setSaveAlert] = React.useState(false);
  const BookmarkHandler = () => {
    setSaveAlert(!saveAlert);
  };

  /*----Chat Modal Handler----*/

  const [chatOpen, setChatOpen] = React.useState(false);
  const handleOpen = () => {
    setChatOpen(!chatOpen);
  };

  /*----menu darwer----*/



  return (
    <>
      <section>
        <div className="text-white">
          <div className="filter flex justify-between px-4 pt-3 items-center">
            <p className="p-1">
              Sort by: <span className="bg-gray-600 rounded px-1">Date</span>
            </p>
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
                  <div className="flex bg-white p-1 gap-1 items-center w-fit rounded">
                    <FaTrash
                      size={15}
                      className="text-gray-800 cursor-pointer"
                      onClick={() => deleteHandler(data.id)}
                    />

                    <FaCommentAlt
                      onClick={handleOpen}
                      variant="gradient"
                      size={15}
                      className="text-gray-800 cursor-pointer"
                    />

                    <FaCloudDownloadAlt
                      size={15}
                      className="text-gray-800 cursor-pointer"
                    />
                    <FaBookmark
                      size={15}
                      className="text-gray-800 cursor-pointer"
                      onClick={BookmarkHandler}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Tasks id={id} />

      <Dialog
        open={chatOpen}
        handler={handleOpen}
        className="chat-page w-fit mx-auto rounded-[10px] border border-gray-900 h-fit"
      >
        <Message />
      </Dialog>
      <Dialog
        open={modalStatus}
        handler={deleteHandler}
        className="w-auto  rounded-[30px] mx-auto mt-10 h-fit"
      >
        <DeleteBtn />
      </Dialog>
      <Dialog
        open={saveAlert}
        handler={BookmarkHandler}
        className="mt-10 mx-auto p-1 w-fit border bg-gray-900 text-green-400 h-fit"
      >
        <div className="flex justify-center gap-1 items-center">
          Item Saved{" "}
          <FaX size={20} onClick={BookmarkHandler} className="cursor-pointer" />
        </div>
      </Dialog>
    </>
  );
};

export default Users;
