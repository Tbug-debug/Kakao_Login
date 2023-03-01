import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CLIENT_ID, REDIRECT_URI, CLIENT_SECRET } from "./Auth";

function KakaoLogin() {
  const PARAMS = new URL(window.location.href).searchParams;
  const KAKAO_CODE = PARAMS.get("code");
  const navigate = useNavigate();
  const location = useLocation();

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: `grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}&client_secret=${CLIENT_SECRET}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
          navigate("/");
        } else {
        }
      });
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  return <div>KakaoLogin</div>;
}

export default KakaoLogin;
