import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import { format } from 'date-fns';



//import moment from "moment";
// import moment from 'moment';
// or
// import 'moment';

// const moment = require('moment')

export const getPosts = (req, res) => {
   const userId = req.query.Puserid;
   const token = req.cookies.accessToken;
   if (!token) return res.status(401).json("Not logged in!");

   jwt.verify(token, "secretkey", (err, userInfo) => {
     if (err) return res.status(403).json("Token is not valid!");
   
   //query for only showing post on you wall from your friends and yours
    
    //this query is to display post on users profile that are only posted by him
     const q = userId !== "undefined" 
     ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.Puserid) 
        WHERE p.Puserid=?
        ORDER BY p.createdAt DESC` 
     
     
     :  `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.Puserid) 
        LEFT JOIN relationships AS r ON (p.Puserid = r.followeduserid) 
        WHERE r.followeruserid= ? OR p.Puserid =?
        ORDER BY p.createdAt DESC`

      const values= userId!== "undefined"  ? [userId]: [userInfo.id,userInfo.id]; 

     db.query(q, values, (err, data) => {
         if (err) return res.status(500).json(err);
         return res.status(200).json(data);
       });
   
   
    })
  
  
    //   console.log(userId);

    // const q =
    //   userId !== "undefined"
    //     ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC`
    //     : `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
    // LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId= ? OR p.userId =?
    // ORDER BY p.createdAt DESC`;

    // const values =
    //   userId !== "undefined" ? [userId] : [userInfo.id, userInfo.id];

    

  //   db.query(q, values, (err, data) => {
  //     if (err) return res.status(500).json(err);
  //     return res.status(200).json(data);
  //   });
  // });

};

//for adding post from students
export const addPost = (req, res) => {

  const currentDate = new Date();
  const formattedDate = format(currentDate, 'yyyy-MM-dd HH:mm:ss');
  // const formattedDate = format(currentDate, 'YYYY-MM-DD HH:mm:ss');



  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
  
  //query for inserting post
   
    // const q = "INSERT INTO `posts` (`Postdesc`,`img`,`Puserid`,`createdAt`) VALUES=(?)";
    const q = "INSERT INTO `posts` (`Postdesc`, `img`, `Puserid`, `createdAt`) VALUES (?, ?, ?, ?)";
    

    const values = [
      req.body.Postdesc,
      req.body.img,
      userInfo.id,
      formattedDate
    ];

    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been created.");
      });
  
  
   })



};

//for adding post from recruiters
export const addRecruiterPost = (req, res) => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'yyyy-MM-dd HH:mm:ss');

  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const { Postdesc, img, isJob } = req.body;

    const q = "INSERT INTO `posts` (`Postdesc`, `img`, `Puserid`, `isJob`, `createdAt`) VALUES (?, ?, ?, ?, ?)";
    
    const values = [
      Postdesc,
      img,
      userInfo.id,
      isJob, // Use the value sent from the client
      formattedDate
    ];

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created.");
    });
  });
};



export const deletePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "DELETE FROM posts WHERE `Pid`=? AND `Puserid` = ?";

    db.query(q, [req.params.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if(data.affectedRows>0) return res.status(200).json("Post has been deleted.");
      return res.status(403).json("You can delete only your post")
    });
  });
};
