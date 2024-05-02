import { db } from "../connect.js";
import jwt from "jsonwebtoken";




export const getSavedPostsDetail = (req, res) => {
    // Retrieve all post details saved by the user, including user name and profile picture
    const q = `
      SELECT p.*, u.name, u.profilePic 
      FROM savedposts AS sp 
      INNER JOIN posts AS p ON sp.postid = p.Pid 
      INNER JOIN users AS u ON p.Puserid = u.id 
      WHERE sp.userid = ?
    `;
    
    db.query(q, [req.query.userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };
  


export const getSavedPosts = (req, res) => {
    // Retrieve all post IDs saved by the user
    const q = "SELECT postid FROM savedposts WHERE userid = ?";
    db.query(q, [req.query.userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data.map(post => post.postid));
    });
  };
  


export const checkSavedPost = (req, res) => {
  // Check if the user has saved a specific post
  const q = "SELECT * FROM savedposts WHERE userid = ? AND postid = ?";
  db.query(q, [req.query.userId, req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.length > 0);
  });
};

export const getUsersSavedPost = (req, res) => {
  // Retrieve all users who saved a specific post along with saved_at
  const q = "SELECT u.*, sp.saved_at FROM users u INNER JOIN savedposts sp ON u.id = sp.userid WHERE sp.postid = ?";
  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const savePost = (req, res) => {
  // Save a post by adding an entry to the savedposts table
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO savedposts (postid, userid) VALUES (?)";
    const values = [
      req.body.postId,
      userInfo.id
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post saved successfully.");
    });
  });
};

export const unsavePost = (req, res) => {
  // Unsave a post by removing the entry from the savedposts table
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM savedposts WHERE userid = ? AND postid = ?";
    db.query(q, [userInfo.id, req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post unsaved successfully.");
    });
  });
};
