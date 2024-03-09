import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getStories = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = `SELECT s.*, name FROM stories AS s JOIN users AS u ON (u.id = s.Suserid)
    LEFT JOIN relationships AS r ON (s.Suserid = r.followeduserid AND r.followeruserid= ?) LIMIT 4`;

    db.query(q, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};


//for stories of a specific user
// export const getUserStories = (req, res) => {
//   const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not logged in!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const q = "SELECT * FROM stories WHERE Suserid = ?";
//     db.query(q, [userInfo.id], (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json(data);
//     });
//   });
// };


//api for stories one at a time

// export const addStory = (req, res) => {
//   const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not logged in!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     // Check if a story already exists for this user
//     const checkQuery = "SELECT * FROM stories WHERE Suserid = ?";
//     db.query(checkQuery, [userInfo.id], (err, data) => {
//       if (err) return res.status(500).json(err);

//       // If a story exists, prevent adding a new one
//       if (data.length > 0) {
//         return res.status(400).json("User already has a story. Cannot add another one.");
//       } else {
//         // No existing story, proceed to add the new one
//         //console.log(moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"));
        
//         const insertQuery = "INSERT INTO stories(`img`, `createdAt`, `Suserid`) VALUES (?)";
//         const values = [
//           req.body.img,
//           moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
//           userInfo.id,
//         ];

//         db.query(insertQuery, [values], (err, data) => {
//           if (err) return res.status(500).json(err);
//           return res.status(200).json("Story has been created.");
//         });
//       }
//     });
//   });
// };




export const addStory = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    // console.log( moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"))

    const q = "INSERT INTO stories(`img`, `createdAt`, `Suserid`) VALUES (?)";
    const values = [
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Story has been created.");
    });
  });
};


export const deleteUserStory = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json("Not logged in!");
  }

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) {
      return res.status(403).json("Token is not valid!");
    }

    // Assuming the story ID is passed as a URL parameter
    const storyId = req.params.id;
    if (!storyId) {
      return res.status(400).json("Story ID is required.");
    }

    // First, verify that the story belongs to the user
    const checkOwnershipQuery = "SELECT * FROM stories WHERE `Sid` = ? AND `Suserid` = ?";
    db.query(checkOwnershipQuery, [storyId, userInfo.id], (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (results.length > 0) {
        // Story exists and belongs to the user, proceed with deletion
        const deleteQuery = "DELETE FROM stories WHERE `Sid` = ?";
        db.query(deleteQuery, [storyId], (deleteErr, deleteResults) => {
          if (deleteErr) {
            return res.status(500).json(deleteErr);
          }
          if (deleteResults.affectedRows > 0) {
            return res.status(200).json("Story has been deleted.");
          } else {
            // This case should not happen as we've already verified ownership
            return res.status(404).json("Story not found.");
          }
        });
      } else {
        // Story does not exist or does not belong to the user
        return res.status(403).json("You can only delete your own stories.");
      }
    });
  });
};
