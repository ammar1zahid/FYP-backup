import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/RecruiterComponents/leftBarRecruiter/LeftBarRecruiter";
import Home from "../RecruiterPages/homeRecruiter/RecruiterHome";
import RecruiterJobComponent from "../RecruiterPages/jobRecruiter/RecruiterJobComponent";
import RightBar from "../../components/rightBar/RightBar";
import "../../style.scss"
import { useContext , useEffect ,useRef , useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export default function RecruiterJobPage() {
  
    const { darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    const queryClient = new QueryClient();



    return (
      <QueryClientProvider client={queryClient}>
          <div className={`theme-${darkMode ? "dark" : "light"}`}>

            <Navbar />
          
            <div style={{ display: "flex" }}>
              <LeftBar />
              <div style={{ flex: 6 }}>
                <RecruiterJobComponent/>
              </div>
              <RightBar/>
            </div>
          </div>
    </QueryClientProvider>
  );
}
