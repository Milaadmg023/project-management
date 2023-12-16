import React from "react";
import Profile from "./Sections/Profile";
import Users from "./Sections/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookmark from "./Sections/Bookmark";

const MainPage = () => {
  return (
    <Router>
      <div className="flex flex-row h-[100vh]">
        <div id="users" className="flex">
          <Routes>
            <Route  path="/" element={<Users />}></Route>
            <Route  path="/bookmark" element={<Bookmark />}></Route>
          </Routes>
          
        </div>
      </div>
    </Router>
  );
};

export default MainPage;
