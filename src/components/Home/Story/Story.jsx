import { Avatar } from "@mui/material";
import React from "react";
import "./Story.css";

function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story  ">
      <Avatar
        src={profileSrc}
        className="m-3 border-blue-400 border-solid border-4"
      />
      <h4 className="absolute text-white bottom-5 left-5">{title}</h4>
    </div>
  );
}

export default Story;
