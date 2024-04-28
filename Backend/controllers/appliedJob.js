import { db } from "../connect.js";
import jwt from "jsonwebtoken";


export const getAppliedJobs = (req, res) => {
  // Retrieve all job IDs for which the user has applied
  const q = "SELECT postid FROM appliedjobs WHERE userid = ?";
  db.query(q, [req.query.userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map(job => job.postid));
  });
};

export const checkAppliedJob = (req, res) => {
  // Check if the user has applied for a specific job
  const q = "SELECT * FROM appliedjobs WHERE userid = ? AND postid = ?";
  db.query(q, [req.query.userId, req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.length > 0);
  });
};


// export const getUsersAppliedToJob = (req, res) => {
//   // Retrieve all users who applied to a specific job
//   const q = "SELECT u.* FROM users u INNER JOIN appliedjobs aj ON u.id = aj.userid WHERE aj.postid = ?";
//   db.query(q, [req.query.postId], (err, data) => {
//     if (err) return res.status(500).json(err);
//     return res.status(200).json(data);
//   });
// };


export const getUsersAppliedToJob = (req, res) => {
  // Retrieve all users who applied to a specific job along with applied_at
  const q = "SELECT u.*, aj.applied_at FROM users u INNER JOIN appliedjobs aj ON u.id = aj.userid WHERE aj.postid = ?";
  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};


export const applyJob = (req, res) => {
  // Apply for a job by adding an entry to the appliedjobs table
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");


    const q = "INSERT INTO appliedjobs (postid, userid) VALUES (?)";
    const values = [
      req.body.postid,
      userInfo.id 
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Job application submitted successfully.");
    });
  });
};





export const cancelJobApplication = (req, res) => {
  // Cancel a job application by removing the entry from the appliedjobs table
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM appliedjobs WHERE userid = ? AND postid = ?";
    db.query(q, [userInfo.id, req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Job application canceled successfully.");
    });
  });
};
