import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

import { useAuth } from "../contexts/AuthContext";

function Chats() {
  const history = useHistory();

  const { user } = useAuth();

  console.log(user);

  const handleLogout = async () => {
    await auth.signOut();

    history.push("/");
  };

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">NoxConnect</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px"
        projectId="0a9846af-64bc-4ec7-b47d-0a027141d88b"
        userName="."
        userSecret="."
      />
    </div>
  );
}

export default Chats;
