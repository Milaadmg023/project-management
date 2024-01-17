import React from "react";
import Users from "./../../Components/Users";
import Tasks from "../../Components/Tasks";

function Home() {
  return (
    <section className="flex">
      <div>
        <Users />
      </div>
      <div>
        <Tasks />
      </div>
    </section>
  );
}

export default Home;
