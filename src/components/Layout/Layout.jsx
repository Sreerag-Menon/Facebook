import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Widget from "../Home/Widget/Widget";
import { useSelector } from "react-redux";

function Layout() {
  const [users, setUsers] = useState({});
  const [image, setImage] = useState({});
  const user = useSelector((state) => state.user);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <>
      <div className="bg-[#F0F2F5] h-full">
        <Header props={users} />
        <div className="flex ">
          <Sidebar props={users} />
          <Outlet props={users} />
          <Widget />
        </div>
      </div>
    </>
  );
}

export default Layout;
