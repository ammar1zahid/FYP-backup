import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import Home from "../home/Home";
import RightBar from "../../components/rightBar/RightBar";
import "../../style.scss"
import { useContext , useEffect ,useRef , useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Socket, io } from "socket.io-client";

export default function Test() {
  
    const { darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    const queryClient = new QueryClient();
    const socket = useRef();

    // useEffect(() => {
    //   socket.current = io("ws://localhost:8900");      
    // }, []);

    // useEffect(() => {
    //   socket.current.emit("addUser", currentUser.id);  
    // }, [currentUser]);

    return (
      <QueryClientProvider client={queryClient}>
          <div className={`theme-${darkMode ? "dark" : "light"}`}>

            <Navbar />
            {/* <Navbar socket={socket}/> */}
            <div style={{ display: "flex" }}>
              <LeftBar />
              <div style={{ flex: 6 }}>
                <Home />
              </div>
              <RightBar/>
            </div>
          </div>
    </QueryClientProvider>
  );
}
