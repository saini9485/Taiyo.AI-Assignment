import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "../home/Home.css"

const Home = () => {
  return (
    <main className="container">
      <div className="LeftContainer">
        <Sidebar />
      </div>
      <div>
        <div className="RightContainer">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Home;
