import React from "react";
import Profile from "./Sections/Profile";
import Users from "./Sections/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookmark from "./Sections/Bookmark";

const MainPage = () => {
  return (
    <Router>
      <div id="main-page" className="flex flex-row h-[100vh]">
        <div id="profile" className="overflow-y-auto overflow-x-hidden w-auto">
          <Profile />
        </div>
        <div id="users" className="flex min-w-[82%] w-[100%]">
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
