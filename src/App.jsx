import React from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import UserContext from "./Context/usersContext"
import { createContext } from "react";


const App = () => {
  const [usersData , setUsersData] = React.useState({
    alertStatus : false,
    membersData : [
      {id:1, job:"Visual Design" , profile:"https://s6.uupload.ir/files/rectangle_3_(4)_r7i0.png",name:"Guy Hawkins", describe:"Header Architecture" , lastSeen:"12:01 pm"},
      {id:2, job:"UI" , profile:"https://s6.uupload.ir/files/rectangle_3_(3)_z830.png",name:"Jacob Jones", describe:"Careers Page UI Screens" , lastSeen:"07:17 AM"},
      {id:3, job:"UX" , profile:"https://s6.uupload.ir/files/rectangle_3_(2)_z5n9.png",name:"Arlene McCoy",describe:"Service Journey Page User" , lastSeen:"01:34 pm"},
      {id:4, job:"Icons Design" , profile:"https://s6.uupload.ir/files/rectangle_3_(1)_io12.png",name:"Jerome Bell" , describe:"Navbar Icons" , lastSeen:"01:08 pm"},
      {id:5, job:"Web Design" , profile:"https://s6.uupload.ir/files/rectangle_3_7s32.png" , name:"Theresa Webb" , describe:"Profile Web Page Design" , lastSeen:"06:42 AM"},
    ] 
  })
  return (
    <UserContext.Provider value={{usersData , setUsersData}}>
      <MainPage />
    </UserContext.Provider>
    
  );
};

export default App;
