import React from "react";
import "./App.css";
import tasksContext from "./Context/tasksContext";
import modalsContext from "./Context/modalsContext";
import usersContext from "./Context/usersContext";
import SavedContext from "./Context/savedContaxt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Pages/Home/Home';
import Bookmark from './Pages/Bookmark/Bookmark';
import Chat from './Pages/Chat/Chat'
import Setting from "./Pages/Setting/Setting";

const App = () => {
  const [modalStatus, setModalStatus] = React.useState(false);

  const [usersData, setUsersData] = React.useState({
    usersTasks: [
      {
        title: "Fixing header icons",
        time: "9/17",
        progress: 55,
        saved: false,
      },
      { title: "Creating footer", time: "9/15", progress: 0, saved: false },
      {
        title: "Updating shoping cart",
        time: "9/17",
        progress: 0,
        saved: false,
      },
      {
        title: "Debuging admin pannel",
        time: "9/20",
        progress: 75,
        saved: false,
      },
      {
        title: "Fixing users dashbord",
        time: "9/18",
        progress: 0,
        saved: false,
      },
    ],
  });

  const [usersInfo, setUsersInfo] = React.useState([
    {
      id: 1,
      job: "Visual Designer",
      profile: "https://s6.uupload.ir/files/rectangle_3_(4)_r7i0.png",
      name: "Guy Hawkins",
      describe: "Header Architecture",
      lastSeen: "12:01 pm",
      saved: false,
    },
    {
      id: 2,
      job: "UI Designer",
      profile: "https://s6.uupload.ir/files/rectangle_3_(3)_z830.png",
      name: "Jacob Jones",
      describe: "Careers Page UI Screens",
      lastSeen: "07:17 AM",
      saved: false,
    },
    {
      id: 3,
      job: "UX Designer",
      profile: "https://s6.uupload.ir/files/rectangle_3_(2)_z5n9.png",
      name: "Arlene McCoy",
      describe: "Service Journey Page User",
      lastSeen: "01:34 pm",
      saved: false,
    },
    {
      id: 4,
      job: "Icons Designer",
      profile: "https://s6.uupload.ir/files/rectangle_3_(1)_io12.png",
      name: "Jerome Bell",
      describe: "Navbar Icons",
      lastSeen: "01:08 pm",
      saved: false,
    },
    {
      id: 5,
      job: "Web Developer",
      profile: "https://s6.uupload.ir/files/rectangle_3_7s32.png",
      name: "Theresa Webb",
      describe: "Profile Web Page Design",
      lastSeen: "06:42 AM",
      saved: false,
    },
  ]);

  const [Id ,setId] = React.useState()

  const [bookmarks, setBookmarks] = React.useState([]);
  const [savedTasks, setSavedTasks] = React.useState([]);
  return (
    <modalsContext.Provider value={{ modalStatus, setModalStatus }}>
      <tasksContext.Provider value={{ usersData, setUsersData }}>
        <usersContext.Provider value={{ usersInfo, setUsersInfo }}>
          <SavedContext.Provider
            value={{ bookmarks, setBookmarks, savedTasks, setSavedTasks , Id , setId }}
          >
            <Router>
              <div id="main-page" className="flex flex-row h-[100vh]">
                <div className="overflow-y-auto overflow-x-hidden w-auto bg-[#BE9AA0B5]">
                  <Navbar />
                </div>
                <div className="flex min-w-[82%] w-[100%] bg-[#393244]">
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/bookmark" element={<Bookmark/>}/>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                  </Routes>
                </div>
              </div>
            </Router>
          </SavedContext.Provider>
        </usersContext.Provider>
      </tasksContext.Provider>
    </modalsContext.Provider>
  );
};

export default App;
