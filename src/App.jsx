import React from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import UserContext from "./Context/usersContext"
import { createContext } from "react";


const App = () => {
  const [deleteStatus , setDeleteStatus] = React.useState(false)
  return (
    <UserContext.Provider value={{deleteStatus , setDeleteStatus}}>
      <MainPage />
    </UserContext.Provider>
    
  );
};

export default App;
