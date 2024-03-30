// import React from 'react'
import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar/Navbar";
import LeftBar from "../components/leftBar/LeftBar";
import "../style.scss"
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { AuthContext } from "../context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CV from './cv/CV';
import CVfetch from './cv/CVfetch';
import axios from 'axios';


function CVlayout() {

  // const [cvData, setCVData] = useState(null);


  // useEffect(() => {
  //   // Fetch submitted CV data from the backend
  //   const fetchCVData = async () => {
  //     try {
  //       const response = await axios.get('/api/fetchCVData'); // Replace with your backend endpoint
  //       setCVData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching CV data:', error);
  //     }
  //   };

  //   fetchCVData();
  // }, []);


    const { darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    const queryClient = new QueryClient();

  return (


      <QueryClientProvider client={queryClient}>
          <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <Navbar />
            <div style={{ display: "flex" }}>
              {/* <LeftBar /> */}
              <div style={{ flex: 6 }}>
                <CV />
                <CVfetch />
                {/* <Home /> */}
              </div>
              {/* <RightBar/> */}
            </div>
          </div>
    </QueryClientProvider>
  )
}

export default CVlayout