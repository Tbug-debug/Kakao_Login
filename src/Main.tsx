import React, { useEffect, useState } from "react";
import { JAVASCRIPT_KEY } from "./Auth";

interface CustomWindow extends Window {
  Kakao: any;
}

declare const window: CustomWindow;

function Main() {
  const [user_id, setUserId] = useState();
  const [nickName, setNickname] = useState();
  const [profileImage, setProfileImage] = useState();
  const ACCESS_TOKEN = localStorage.getItem("token");
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(JAVASCRIPT_KEY);
    window.Kakao.Auth.setAccessToken(ACCESS_TOKEN);
  }

  const getProfile = async () => {
    try {
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      setUserId(data.id);
      setNickname(data.properties.nickName);
      setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <img src={profileImage}></img>
    </div>
  );
}

export default Main;
