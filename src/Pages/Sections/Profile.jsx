import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import membersData from "../../membersData";
import { MdAddBox } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgMenuLeftAlt , CgProfile } from "react-icons/cg";
import { Dialog } from "@material-tailwind/react";
import { FaX } from "react-icons/fa6";


const Profile = () => {

  const [menuStatus, setMenuStatus] = React.useState(false);

  const menuHandler = () => setMenuStatus(!menuStatus);

  return (
    <div className="flex">
      <div className="p-1 flex flex-col gap-y-2">
        <div className="menu-icon">
          <CgMenuLeftAlt
            className="cursor-pointer mx-auto"
            size={30}
            onClick={menuHandler}
          />
        </div>
        <div className="commands-container">
            <Link to="/">
              <div
                className="flex flex-col cursor-pointer rounded-[0.5rem] justify-center text-center active"
                id="inbox"
              >
                <HiOutlineMail size={25} className="mx-auto" /> Inbox
              </div>
            </Link>

            <Link to="/bookmark">
              <div
                className="flex flex-col mt-2 p-1 cursor-pointer rounded-[0.5rem]"
                id="bookmark"
              >
                <FaBookmark size={22} className="mx-auto"/> Bookmark
              </div>
            </Link>
        </div>
      </div>
      <Dialog open={menuStatus} handler={menuHandler} className=" bg-[none] pt-2">
        <div className="text-white pb-4 bg-[#BE9AA0B5] min-w-fit max-w-[20%] mx-auto rounded">
          <div className="header-icons flex justify-between pt-2 px-4">
            <CgProfile className="cursor-pointer text-blue-300" size={32}/>
            <FaX className="cursor-pointer text-gray-900" onClick={menuHandler} size={28}/>
          </div>
          <div className="profile-container pt-6 ms-10">
            <div className="profile-img h-40 w-40">
              <img
                src="https://s6.uupload.ir/files/your_image_here👈_22nl.png"
                alt="profile img"
              />
            </div>
            <h2 className="mt-4 text-2xl font-bold">Milad Bageri</h2>
            <p className="font-thin">MdPro1992@Gmail.com</p>
          </div>
          <p className="h-0.5 bg-white mx-auto my-4 w-3/4 my-2"></p>
          <div className="members">
            <p className="text-white flex justify-between px-9">
              ADD NEW
              <MdAddBox className="cursor-pointer" size={22} />
            </p>
            {membersData.map((data) => {
              return (
                <div className="flex p-1 justify-between items-center px-9">
                  <div className="flex items-center">
                    <img
                      src={data.profile}
                      alt=""
                      className="h-8 rounded-full"
                    />{" "}
                    &nbsp; &nbsp; {data.job}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="h-0.5 bg-white mx-auto mt-4 w-3/4 my-2"></p>
          <div className="project-container mx-9">
            <p className="text-white flex justify-between">
              ADD NEW
              <MdAddBox className="cursor-pointer" size={22} />
            </p>
            <button className="text-black p-1 rounded mt-1">
              Ruang Guru Website
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Profile;
