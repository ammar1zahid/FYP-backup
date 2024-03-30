// import React from "react";
// import React, { useState } from 'react';


import React, { useState, useEffect } from 'react';
// import { Document, Page } from 'react-pdf'; 
// Import react-pdf
import axios from 'axios';


// import "./cvStyle.css";
// import "./cvFuncs.js"
import Navbar from "../../components/navbar/Navbar";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
// import "../../style.scss"
// import "./carouselStyle.css"
import { Link } from "react-router-dom";

import SecondCV from './cvTemplates/SecondCV';
import secondcvv from "../../assets/secondcvv.png"

import FirstCV from "./cvTemplates/FirstCV";
import firstcvvsmol from "../../assets/firstcvvsmol.png"
import LeftBar from '../../components/leftBar/LeftBar';

// Frontend\src\components\navbar\Navbar.jsx
function CV() {



    return (

<>


        <div>
        <style>
          {`
            .page {
              // height: 100vh;
              margin: 0;
              display: grid;
              grid-template-rows: auto 100px;
              grid-template-columns: 1fr;
              align-items: center;
              justify-items: center;
            }
  
            .carou {
              grid-row: 1 / 2;
              grid-column: 1 / 8;
              width: 70vw;
              height: 500px;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              transform-style: preserve-3d;
              perspective: 600px;
              --items: 5;
              --middle: 3;
              --position: 1;
            }
  
            div.item {
              position: absolute;
              --middle: 3;
              width: 314px;
              height: 400px;
              
              
              
              background-color: coral;
              --r: calc(var(--position) - var(--offset));
              --abs: max(calc(var(--r) * -1), var(--r));
              transition: all 0.25s linear;
              transform: rotateY(calc(-10deg * var(--r))) translateX(calc(-300px * var(--r)));
              z-index: calc((var(--position) - var(--abs)));
            }
  
            div.item:nth-of-type(1) {
              --offset: 1;
              background-color: #90f1ef;
            }
            div.item:nth-of-type(2) {
              --offset: 2;
              background-color: #ff70a6;
            }
            div.item:nth-of-type(3) {
              --offset: 3;
              background-color: #ff9770;
            }
            div.item:nth-of-type(4) {
              --offset: 4;
              background-color: #ffd670;
            }
            div.item:nth-of-type(5) {
              --offset: 5;
              background-color: #e9ff70;
            }
  
            input:nth-of-type(1) {
              grid-column: 2 / 3;
              grid-row: 2 / 3;
            }
            input:nth-of-type(1):checked ~ main#carousel {
              --position: 1;
            }
  
            input:nth-of-type(2) {
              grid-column: 3 / 4;
              grid-row: 2 / 3;
            }
            input:nth-of-type(2):checked ~ main#carousel {
              --position: 2;
            }
  
            input:nth-of-type(3) {
              grid-column: 4 / 5;
              grid-row: 2 / 3;
            }
            input:nth-of-type(3):checked ~ main#carousel {
              --position: 3;
            }
  
            input:nth-of-type(4) {
              grid-column: 5 / 6;
              grid-row: 2 / 3;
            }
            input:nth-of-type(4):checked ~ main#carousel {
              --position: 4;
            }
  
            input:nth-of-type(5) {
              grid-column: 6 / 7;
              grid-row: 2 / 3;
            }
            input:nth-of-type(5):checked ~ main#carousel {
              --position: 5;
            }
          `}
        </style>
        </div>



  {/* CAROUSEL DIV START */}
  <div className='page'>


    
   <input type="radio" name="position" defaultChecked style={{alignItems: "center"}}/>
   <input type="radio" name="position" />
   <input type="radio" name="position" />
   <input type="radio" name="position" />
   <input type="radio" name="position" />
   
   <main id="carousel" className='carou'>
   
     <div className="item">
      <Link to={"/FirstCV"} >
            
      <img src={firstcvvsmol} alt="img error" />

      </Link>  
     </div>


     <div className="item">
     <Link to={"/SecondCV"} >
            
      <img src={secondcvv} alt="img error" />
      
     </Link>  
     </div>

     <div className="item" />
     <div className="item" />
     <div className="item" />
     
   </main>
   
  </div> 
  {/* CAROUSEL DIV END */}








</>


    )

//     const design = {
        
//     }

    

   
//     // const { darkMode } = useContext(DarkModeContext);
//     // const { currentUser } = useContext(AuthContext);  
// {/* <FirstCV /> */}





//   return (
    

// <div className='page'>


    
//   <input type="radio" name="position" defaultChecked />
//   <input type="radio" name="position" />
//   <input type="radio" name="position" />
//   <input type="radio" name="position" />
//   <input type="radio" name="position" />
//   <main id="carousel" className='carou'>

//     <div className="item">
 
//     <Link to={"/FirstCV"} >
            
//             <img src={firstcvv} alt="img error" />
//             </Link>




        
        
//     </div>

//     <div className="item" />
//     <div className="item" />
//     <div className="item" />
//     <div className="item" />
//     </main>
    
//     </div>




  
}

export default CV




