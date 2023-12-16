import React from "react";
import "../Header/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

function Header(userdetails) {
  const user = useSelector((state) => state.user);
  const { username, image } = user.user;
  console.log(username);
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032"
          alt="fblogo"
        />
        <div className="header__input">
          <SearchIcon className="ml-2" />
          <input
            className="bg-transparent border-0 outline-0 w-full ml-3 h-full "
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="middle">
        <NavLink
          className={({ isActive }) => {
            isActive ? (
              <div className="headerOption">
                <HomeIcon fontSize="large" />
              </div>
            ) : (
              <div className="headerOptions">
                <HomeOutlinedIcon />
              </div>
            );
          }}
        ></NavLink>
        <NavLink>
          <div className="headerOption">
            <PeopleOutlineIcon fontSize="large" />
          </div>
        </NavLink>
        <NavLink>
          <div className="headerOption">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
        </NavLink>
        <NavLink>
          <div className="headerOption">
            <SportsEsportsOutlinedIcon fontSize="large" />
          </div>
        </NavLink>
      </div>
      <div className="header__right flex">
        <div className="flex items-center">
          <Avatar src={image} fontSize="large" />
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
