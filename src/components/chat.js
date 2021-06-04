import React from "react";
import "./chat.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { InsertEmoticon, MicOutlined } from "@material-ui/icons";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>dgdgfg</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_msg">
          <span className="chat_name">Aman</span>
          hello ho how are you
          <span className="chat_time">{new Date().toUTCString()}</span>
        </p>
        <p className=" chat_msg chat_reciever">
          <span className="chat_name">Aman</span>
          hello ho how are you
          <span className="chat_time">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_msg">
          <span className="chat_name">Aman</span>
          hello ho how are you
          <span className="chat_time">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="sdssdvsdfdvd" />
          <button type="submit">Submit</button>
        </form>
        <MicOutlined />
      </div>
    </div>
  );
}

export default Chat;
