import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import membersData from "../../membersData";
import { MdAddBox } from "react-icons/md";
import {FaBookmark} from "react-icons/fa"
import { Link } from "react-router-dom";


const Profile = () => {
  const [avtivedBtn , setActiveBtn] = React.useState('')

  React.useEffect(() => {

  }, []);


  function handleBackground(e) {
    const clickedBtn = e.target;
    setActiveBtn(e.target.id)
    //const btn = e.target.id;
    //console.log(btn);
    const activeBtn = document.querySelector('.active');
  
    if (clickedBtn === activeBtn) {
      clickedBtn.classList.remove('active');
    } else {
      if (activeBtn) {
        activeBtn.classList.remove('active');
      }
      clickedBtn.classList.add('active');
    }
  
  }
  
  return (
    <div className="text-white pb-4">
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
      <div className="commands-container ms-9 w-[50%]">
        <Link to="/">
          <div className="flex p-1 cursor-pointer rounded-[0.5rem]" id="inbox" onClick={handleBackground}>
            <HiOutlineMail size={25} /> &nbsp; &nbsp; Inbox  
          </div>
        </Link>

        <Link to="/bookmark">
          <div className="flex mt-2 p-1 cursor-pointer rounded-[0.5rem]" id="bookmark" onClick={handleBackground}>
            <FaBookmark size={22} /> &nbsp; &nbsp;&nbsp; Bookmark
          </div>        
        </Link>

      </div>
      <p className="h-0.5 bg-white mx-auto my-4 w-3/4 my-2"></p>
      <div className="members">
        <p className="text-white flex justify-between px-9">
          ADD NEW
          <MdAddBox className="cursor-pointer" size={22}/>
        </p>
        {membersData.map((data) => {
          return (
            <div className="flex p-1 justify-between items-center px-9">
              <div className="flex items-center">
                <img src={data.profile} alt="" className="h-8 rounded-full"/> &nbsp; &nbsp; {data.job}
              </div>
            </div>
          );
        })}
      </div>
      <p className="h-0.5 bg-white mx-auto mt-4 w-3/4 my-2"></p>
      <div className="project-container mx-9">
        <p className="text-white flex justify-between">
          ADD NEW
          <MdAddBox className="cursor-pointer" size={22}/>
        </p>
        <button className="text-black p-1 rounded mt-1">Ruang Guru Website</button>
      </div>
    </div>
  );
};

export default Profile;
