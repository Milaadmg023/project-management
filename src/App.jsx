import React from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import tasksContext from "./Context/tasksContext";
import modalsContext from "./Context/modalsContext";
import usersContext from "./Context/usersContext";

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
  const [usersInfo, setUsersInfo] = React.useState({
    membersData: [
      {
        id: 1,
        job: "Visual Design",
        profile: "https://s6.uupload.ir/files/rectangle_3_(4)_r7i0.png",
        name: "Guy Hawkins",
        describe: "Header Architecture",
        lastSeen: "12:01 pm",
      },
      {
        id: 2,
        job: "UI",
        profile: "https://s6.uupload.ir/files/rectangle_3_(3)_z830.png",
        name: "Jacob Jones",
        describe: "Careers Page UI Screens",
        lastSeen: "07:17 AM",
      },
      {
        id: 3,
        job: "UX",
        profile: "https://s6.uupload.ir/files/rectangle_3_(2)_z5n9.png",
        name: "Arlene McCoy",
        describe: "Service Journey Page User",
        lastSeen: "01:34 pm",
      },
      {
        id: 4,
        job: "Icons Design",
        profile: "https://s6.uupload.ir/files/rectangle_3_(1)_io12.png",
        name: "Jerome Bell",
        describe: "Navbar Icons",
        lastSeen: "01:08 pm",
      },
      {
        id: 5,
        job: "Web Design",
        profile: "https://s6.uupload.ir/files/rectangle_3_7s32.png",
        name: "Theresa Webb",
        describe: "Profile Web Page Design",
        lastSeen: "06:42 AM",
      },
    ],
  });
  return (
    <modalsContext.Provider value={{ modalStatus, setModalStatus }}>
      <tasksContext.Provider value={{ usersData, setUsersData }}>
        <usersContext.Provider value={{usersInfo , setUsersInfo}}>
          <MainPage />
        </usersContext.Provider>
      </tasksContext.Provider>
    </modalsContext.Provider>
  );
};

export default App;
