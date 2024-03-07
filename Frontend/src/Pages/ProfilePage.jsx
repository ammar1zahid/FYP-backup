import React from "react";
import Navbar from "../components/navbar/Navbar";
import LeftBar from "../components/leftBar/LeftBar";
// import Home from "./home/Home";
import Profile from "./profile/Profile";
import RightBar from "../components/rightBar/RightBar";
import "../style.scss"
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { AuthContext } from "../context/authContext";


export default function ProfilePage() {
  
    const { darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);  
  
    return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          {/* <Home /> */}
          <Profile/>
        </div>
        <RightBar/>
      </div>
    </div>
  )
}
