import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const scheduleInterview = (req, res) => {
  // Schedule an interview by adding an entry to the interviews table
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO interviews (postid, studentid, recruiterid, scheduledAt) VALUES (?, ?, ?, ?)";
    const values = [
      req.body.postid,
      req.body.studentid,
      userInfo.id, // Use recruiter's id from userInfo
      req.body.scheduledAt
    ];

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Interview scheduled successfully.");
    });
  });
};


export const updateInterviewScheduledAt = (req, res) => {
  const { studentId, postId } = req.query;
  const { scheduledAt } = req.body;

  // Check if scheduledAt is provided
  if (!scheduledAt) {
    return res.status(400).json({ error: 'Scheduled time is required.' });
  }

  // Update the scheduledAt time for the specified interview
  const q = `
    UPDATE interviews
    SET scheduledAt = ?
    WHERE studentid = ? AND postid = ?
  `;
  const values = [scheduledAt, studentId, postId];

  db.query(q, values, (err, result) => {
    if (err) {
      console.error('Error updating scheduledAt time:', err);
      return res.status(500).json({ error: 'An error occurred while updating scheduledAt time.' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'No matching interview found for update.' });
    }

    return res.status(200).json({ message: 'Scheduled time updated successfully.' });
  });
};


export const cancelInterview = (req, res) => {
    // Cancel an interview by removing the entry from the interviews table
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q = "DELETE FROM interviews WHERE id = ?";
      db.query(q, [req.query.interviewId], (err, data) => {
        if (err) {
          return res.status(500).json("An error occurred while canceling the interview.");
        }
  
        if (data.affectedRows === 0) {
          return res.status(404).json("No matching interview found for cancellation.");
        }
  
        return res.status(200).json("Interview canceled successfully.");
      });
    });
  };
  

export const getInterviewsForRecruiter = (req, res) => {
    // Retrieve all interviews for a specific recruiter
    const q = "SELECT * FROM interviews WHERE recruiterid = ?";
    db.query(q, [req.query.recruiterId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };
  
  export const getInterviewsForStudent = (req, res) => {
    // Retrieve all interviews for a specific student
    const q = "SELECT * FROM interviews WHERE studentid = ?";
    db.query(q, [req.query.studentId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };

  export const getInterviewsForPost = (req, res) => {
    // Retrieve all interviews for a specific post
    // const q = "SELECT * FROM interviews WHERE postid = ?";

    const q = `
    SELECT i.*, u.name AS name, u.profilePic AS profilePic
    FROM interviews i
    INNER JOIN users u ON i.studentid = u.id
    WHERE i.postid = ?
  `;

    db.query(q, [req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };
  
  
