import React from "react";
import {FaX } from "react-icons/fa6";
import { Dialog } from "@material-tailwind/react";
import {
  FaTrash,
  FaBookmark,
  FaCommentAlt,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import "./users-style.css";
import Message from "./Message";
import DeleteBtn from "./DeleteBtn.jsx";
import modalsContext from "../Context/modalsContext.jsx";
import usersContext from "../Context/usersContext.jsx";
import SavedContext from "../Context/savedContaxt.jsx";

const Users = () => {
  const { usersInfo, setUsersInfo } = React.useContext(usersContext);

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
  const { bookmarks, setBookmarks } = React.useContext(SavedContext);
  const BookmarkHandler = (user) => {
    setSaveAlert(!saveAlert);
    setBookmarks((prevBookmarks) => [...prevBookmarks, user]);
    console.log(bookmarks);
  };

  const closeBookmark = () => {
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
      <section className="text-[13px] sm:text-[16px] w-fit">
        <div className="text-white">
          <div className="filter flex justify-between p-0 sm:px-4 pt-3 items-center">
            <p className="p-1">
              Sort by:{" "}
              <span className="bg-gray-600 rounded p-0 md:px-1">Date</span>
            </p>
          </div>
          <div className="users-container py-2 h-[90vh] overflow-y-auto w-fit">
            {usersInfo.map((data) => {
              return (
                <div
                  id="user__container"
                  className="flex flex-col lg:flex-row m-2 bg-gray-500 rounded-md lg:w-fit"
                  onClick={() => ShowHandler(data.id)}
                >
                  <div
                    id="user-profile"
                    className="flex justify-center md:justify-start lg:w-[13vw]"
                  >
                    <img
                      src={data.profile}
                      alt="profile img"
                      className="h-14 m-0 md:m-1"
                    />
                    <div id="profile-desc" className="hidden md:block">
                      <span>{data.name}</span>
                      <h3 className="text-gray-400 self-end">
                        {data.describe}
                      </h3>
                    </div>
                  </div>
                  <div
                    id="user-commands"
                    className="flex bg-white p-1 gap-1 items-center rounded justify-center h-fit lg:grid lg:w-fit"
                  >
                    <FaTrash
                      size={15}
                      className="text-gray-800 cursor-pointer"
                      onClick={() => deleteHandler(data)}
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
                      onClick={() => BookmarkHandler(data)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Dialog open={chatOpen} handler={handleOpen} className="chat-page w-fit mx-auto mt-4">
        <Message />
      </Dialog>
      <Dialog open={modalStatus} handler={deleteHandler} className="w-fit mx-auto mt-4">
        <DeleteBtn />
      </Dialog>
      <Dialog
        open={saveAlert}
        handler={closeBookmark}
        className="mt-10 mx-auto p-1 w-fit border bg-gray-900 text-white h-fit"
      >
        <div className="flex justify-center gap-1 items-center">
          Item Saved
          <FaX size={20} onClick={closeBookmark} className="cursor-pointer" />
        </div>
      </Dialog>
    </>
  );
};

export default Users;
