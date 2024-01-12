import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useSelector } from "react-redux";
import { FieldValue, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../../utils/firebase/firebase";
import { collection } from "firebase/firestore";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

function Messagecenter({ props }) {
  const user = useSelector((state) => state.user);
  const { username, image } = user.user;
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [emojiSelected, setEmojiSelected] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const post = collection(db, "posts");
    addDoc(post, {
      profilePic: image,
      timestamp: serverTimestamp(),
      message: text,
      username: username,
      image: url,
    });
    setText("");
    setUrl("");
  };
  // const handleEmoji = () => {
  //   setEmojiSelected((prev) => !prev);
  // };
  const emojiSelect = (e) => {
    const sys = e.unified.split("_");
    console.log(sys);
    const emojiArray = [];
    sys.forEach((el) => emojiArray.push("0x" + el));

    let emoji = String.fromCodePoint(...emojiArray);
    setText(text + emoji);
  };
  return (
    <div className="flex flex-col bg-white rounded-2xl w-full  mt-10 shadow-[0_5px_-7px_rgba(0,0,0.75)] ">
      <div className="flex border-b-2 border-solid border-[#eff2f5] p-4">
        {/* <Avatar src={props.image} /> */}
        <form className="flex flex-1">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="outline-none border-none p-[5px_20px] rounded-[999px] bg-[#eff2f5] m-[0_10px] flex-1"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Image URL(optional)"
            className="outline-none border-none p-[5px_20px] rounded-[999px] bg-[#eff2f5] m-[0_10px] "
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <button type="submit" className="hidden" onClick={handleSubmit}>
            Hidden Button
          </button>
        </form>
      </div>

      <div className="flex justify-evenly  ">
        <div className="p-3 flex items-center text-gray-400 m-[5px] hover:bg-[#eff2f5] rounded-[20px]">
          <VideoCameraFrontIcon className="text-red-600" />
          <h3 className="text-base ml-3 cursor-pointer">Live video</h3>
        </div>
        <div className="p-3 flex items-center text-gray-400 m-[5px] hover:bg-[#eff2f5] rounded-[20px]">
          <PhotoLibraryIcon className="text-green-600" />
          <h3 className="text-base ml-3 cursor-pointer">Photo/video</h3>
        </div>
        <div
          className="p-3 flex items-center text-gray-400 m-[5px] hover:bg-[#eff2f5] rounded-[20px]"
          onClick={() => setEmojiSelected((prev) => !prev)}
        >
          <InsertEmoticonIcon className="text-yellow-400" />
          <h3 className="text-base ml-3 cursor-pointer select-none">
            Feeling/Activity
          </h3>
          {emojiSelected && (
            <div className="absolute top-[52%] ">
              <Picker data={data} onEmojiSelect={emojiSelect} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messagecenter;
