import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
// import Avatar from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat_info">
        <h3>Room Name</h3>
        <p>lorem5fvdf</p>
      </div>
    </div>
  );
}

export default SidebarChat;
