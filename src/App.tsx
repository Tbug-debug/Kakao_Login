import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Login from "./Login";
import KakaoLogin from "./KakaoLogin";
import Four from "./404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kakaoLogin" element={<KakaoLogin />} />
        <Route path="/four" element={<Four />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
