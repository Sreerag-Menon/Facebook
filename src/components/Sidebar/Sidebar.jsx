import React from "react";
import SidebarRow from "./SidebarRow";
import GroupIcon from "@mui/icons-material/Group";
import HistoryIcon from "@mui/icons-material/History";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupsIcon from "@mui/icons-material/Groups";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { useSelector } from "react-redux";
function Sidebar({ props }) {
  const user = useSelector((state) => state.user);

  const { username, image } = user.user;
  return (
    <div className="sidebar p-[25px_10px] flex-[0.33]">
      <SidebarRow src={image} title={username} />
      <SidebarRow Icon={GroupIcon} title="Find Firends" />
      <SidebarRow Icon={HistoryIcon} title="Memories" />
      <SidebarRow Icon={BookmarkIcon} title="Saved" />
      <SidebarRow Icon={GroupsIcon} title="Groups" />
      <SidebarRow Icon={OndemandVideoIcon} title="Video" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={EventBusyIcon} title="Event" />
      <SidebarRow Icon={ExpandCircleDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
