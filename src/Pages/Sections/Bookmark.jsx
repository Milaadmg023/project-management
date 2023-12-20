import React from "react";
import "../.././App.css";
import { IoFilter } from "react-icons/io5";
import {
  Button,
  ButtonGroup
} from "@material-tailwind/react";
import SavedUser from "./Users/SavedUser";
import SavedTask from "./Users/SavedTask";
import SavedContext from "../../Context/savedContaxt";

const Bookmark = () => {

  const {bookmarks , setBookmarks} = React.useContext(SavedContext)
  const uniqueUsers = bookmarks.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen((cur) => !cur);
  };

  return (
    <div className="w-[100vw]">
      <div className="search-bar bg-gray-500 h-auto justify-center py-2">
        <div className="flex items-center justify-center items-center">
          <div className="rounded-lg bg-gray-200">
            <div className="flex">
              <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-5 fill-gray-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
                placeholder="type something..."
                id=""
              />
              <input
                type="button"
                value="Search"
                className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors text-dark-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] h-[100vh]">
        <section id="filtered-bookmarks" className="bg-[#363048] w-[100%]">
          <div className="flex justify-between text-white pt-1 px-3">
            <h2 className="text-xl">Filtered Bookmarks</h2>
            <IoFilter size={30} onClick={toggleOpen} />
          </div>
          <div className="filters-container">
            <ButtonGroup variant="text" className="justify-center gap-2">
              <Button className="border p-1 text-white">Date Add</Button>
              <Button className="border p-1 text-white ">Folder</Button>
              <Button className="border p-1 text-white">Z-A</Button>
              <Button className="border p-1 text-white">A-Z</Button>
            </ButtonGroup>
          </div>
          <p className="h-0.5 bg-white mx-auto w-5/6 my-2"></p>
          <div className="groups__container grid grid-cols-2">
            <div className="saved__users h-[100vh] overflow-y-auto">
              <h1 className="text-white text-center text-xl">Users</h1>
              <p className="h-0.5 bg-white mx-auto w-5/6 my-2"></p>
              <div className="bookmarks__container px-4 py-2 grid grid-cols-2 justify-center">
                {
                  uniqueUsers.map((user)=>{
                    return(
                      <SavedUser value={user}/>
                    )
                  })
                }
                
              </div>
            </div>
            <div className="saved__tasks overflow-y-auto">
              <h1 className="text-white text-center text-xl">Tasks</h1>
              <p className="h-0.5 bg-white mx-auto w-5/6 my-2"></p>
              <div className="bookmarks__container px-8 py-2 grid grid-cols-4 justify-around">
                <SavedTask/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bookmark;
