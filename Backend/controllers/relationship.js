import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getRelationships = (req,res)=>{
    const q = "SELECT followeruserid FROM relationships WHERE followeduserid = ?";

    db.query(q, [req.query.followeduserid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data.map(relationship=>relationship.followeruserid));
    });
}

//to get your friends ie to which other users youre following
export const getFriends = (req, res) => {
  const q = "SELECT followeduserid FROM relationships WHERE followeruserid = ?";

  db.query(q, [req.query.followeruserid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data.map(relationship => relationship.followeduserid));
  });
};

export const getFriendsData = async (req, res) => {
  const userId = req.query.userId;

  try {
    // Fetch user IDs of all friends
    const friendIdsQuery = "SELECT followeduserid FROM relationships WHERE followeruserid = ?";
    const friendIds = await new Promise((resolve, reject) => {
      db.query(friendIdsQuery, [userId], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });

    // console.log("Friend IDs:", friendIds); // Log friend IDs

    // Initialize an array to store user data of friends
    const friendsData = [];

    // Fetch user data for each friend asynchronously
    for (const friendId of friendIds) {
      const userDataQuery = "SELECT id, username, profilePic FROM users WHERE id=?";
      const userData = await new Promise((resolve, reject) => {
        db.query(userDataQuery, [friendId.followeduserid], (err, results) => {
          if (err) reject(err);
          resolve(results[0]); // Assuming there's only one user for each ID
        });
      });
      friendsData.push(userData);
    }

    // console.log("Friends Data:", friendsData); // Log friends data

    res.json(friendsData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};





export const addRelationship = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO relationships (`followeruserid`,`followeduserid`) VALUES (?)";
    const values = [
      userInfo.id,
      req.body.userId
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Following");
    });
  });
};

export const deleteRelationship = (req, res) => {

  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM relationships WHERE `followeruserid` = ? AND `followeduserid` = ?";

    db.query(q, [userInfo.id, req.query.userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Unfollow");
    });
  });
};