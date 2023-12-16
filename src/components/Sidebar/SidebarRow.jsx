import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow flex items-center p-3 cursor-pointer hover:bg-gray-200 hover:rounded-xl">
      {typeof src == "string" && <Avatar src={src} />}
      {Icon && <Icon fontSize="large" className="text-blue-600" />}
      <h4 className="ml-5 font-normal font">{title}</h4>
    </div>
  );
}

export default SidebarRow;
