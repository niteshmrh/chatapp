import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../context/authContext";
import axios from "axios";

function Chats(props) {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  //   const didMountRef = useRef(false);
  console.log("-----", user);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          projectID: process.env.REACT_APP_CHAT_ENGINE_ID,
          "user-name": user.email,
          "user-secret": user.uid,
          "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
              },
            })
            .then(() => setLoading(false))
            .catch((e) => console.log("e", e.response));
        });
      });
  }, [user, navigate]);

  //   if (!user || loading) return "Loding.....";

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">ChatApp</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>
      <ChatEngine
        heigth="calc(100vh-66px)"
        projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}

export default Chats;
