import React from "react";
import {FaX } from "react-icons/fa6";
import { Dialog } from "@material-tailwind/react";
import {
  FaTrash,
  FaBookmark,
  FaCommentAlt,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import "../App.css";
import Message from "./Message";
import DeleteBtn from "./DeleteBtn.jsx";
import modalsContext from "../Context/modalsContext.jsx";
import usersContext from "../Context/usersContext.jsx";
import SavedContext from "../Context/savedContaxt.jsx";

const Users = () => {
  const { usersInfo, setUsersInfo } = React.useContext(usersContext);

  const {Id, setId}= React.useContext(SavedContext);
  const ShowHandler = (userId) => {
    setId(userId)
  };

  const { bookmarks, setBookmarks } = React.useContext(SavedContext);
  const BookmarkHandler = (user) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, user]);
  };


  return (
    <>
      <section className="text-[13px] sm:text-[16px] w-fit text-white">
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
                </div>
              );
            })}
          </div>
      </section>
    </>
  );
};

export default Users;
