import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import "./Post.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import db from "../../../firebase/firebase";
// import { doc, setDoc } from "firebase/firestore";

function Post({
  profilePic,
  isliked,
  image,
  username,
  timestamp,
  message,
  like,
  onDelete,
  onLike,
}) {
  return (
    <div className="w-full mt-4 rounded-[15px] bg-white shadow-[0px_5px_7px_-7px_rgba(0_0_0.75)]">
      <div className="flex items-center relative p-[15px]">
        <Avatar src={profilePic} className="mr-3" />
        <div className="post_middle">
          <h3 className="text-base font-medium">{username}</h3>
          <p className="text-sm text-gray-400 ">
            {new Date(timestamp?.toDate()).toUTCString()}
          </p>
        </div>
      </div>
      <div className="mt-3 mb-3 p-[15px_25px]">
        <p className="">{message}</p>
      </div>
      <div className="post-image">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="post_opts">
        <div className="post_opt" onClick={onLike}>
          {!isliked ? <ThumbUpOffAltIcon /> : <ThumbUpIcon />}
          <p className="ml-3">{like}</p>
        </div>
        <div className="post_opt">
          <ChatBubbleOutlineIcon />
          <p className="ml-3">Comment</p>
        </div>
        <div className="post_opt">
          <DeleteOutlineIcon />
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
