import React from 'react'
import Navbar from "../components/navbar/Navbar";
import LeftBar from "../components/leftBar/LeftBar";
import RightBar from "../components/rightBar/RightBar";
import "../style.scss"
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { AuthContext } from "../context/authContext";
import MessengerComponent from './messenger/MessengerComponent';



export default function Messenger() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext); 
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />

      {/* <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
  
        </div>
        <RightBar/>
      </div> */}
      <MessengerComponent/>

    </div>
  )
}
