import { db } from "../connect.js";
import jwt from "jsonwebtoken";

//to get all the users id who follow the current user
export const getRelationships = (req,res)=>{
    const q = "SELECT followeruserid FROM relationships WHERE followeduserid = ?";

    db.query(q, [req.query.followeduserid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data.map(relationship=>relationship.followeruserid));
    });
}


//to get detail of all users who follow the current user
export const getRelationshipsData = async (req, res) => {
  const userId = req.query.userId;

  try {
    // Fetch user IDs of all followers
    const followerIdsQuery = "SELECT followeruserid FROM relationships WHERE followeduserid = ?";
    const followerIds = await new Promise((resolve, reject) => {
      db.query(followerIdsQuery, [userId], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });

    // Initialize an array to store user data of followers
    const followersData = [];

    // Fetch user data for each follower asynchronously
    for (const followerId of followerIds) {
      const userDataQuery = "SELECT id, username, profilePic FROM users WHERE id=?";
      const userData = await new Promise((resolve, reject) => {
        db.query(userDataQuery, [followerId.followeruserid], (err, results) => {
          if (err) reject(err);
          resolve(results[0]); // Assuming there's only one user for each ID
        });
      });
      followersData.push(userData);
    }

    // Send the user data of followers in the response
    res.json(followersData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};











//to get all the users you follow
//to get your friends ie to which other users you're following
export const getFriends = (req, res) => {
  const q = "SELECT followeduserid FROM relationships WHERE followeruserid = ?";

  db.query(q, [req.query.followeruserid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data.map(relationship => relationship.followeduserid));
  });
};

//to get detail of all users which you follow
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




// FOLLOWERS of current user who are NOT FOLLOWED by current user
export const getFollowersNotFollowedByCurrentUser = (req, res) => {
  const userId = req.query.userId;

  // SQL query to get the users who follow the current user but are not followed by the current user
  const q = `
    SELECT followeruserid 
    FROM relationships 
    WHERE followeduserid = ? AND followeruserid NOT IN (
      SELECT followeduserid 
      FROM relationships 
      WHERE followeruserid = ?
    )
  `;

  db.query(q, [userId, userId], (err, data) => {
    if (err) return res.status(500).json(err);

    // Extract follower user IDs from the query result
    const followerUserIds = data.map(relationship => relationship.followeruserid);

    res.status(200).json(followerUserIds);
  });
};










// SUGGESTED FRIENDS

//to get suggested friends data
export const getSuggestedFriendsData = async (req, res) => {
  // Extract the user ID from the request query parameters
  const userId = Number(req.query.userId); // Convert userId to number

  try {
    // Fetch user IDs of all friends of the given user

    const friendIdsQuery = "SELECT followeduserid FROM relationships WHERE followeruserid = ?";

    const friendIds = await new Promise((resolve, reject) => {
      db.query(friendIdsQuery, [userId], (err, results) => {
        if (err) reject(err);
        resolve(results.map(row => row.followeduserid)); // Extract friend IDs from rows
      });
    });

    // If the user doesn't have any friends, fetch all users
    if (friendIds.length === 0) {
      //return all users other than the current user
      const allUsersQuery = "SELECT id, username, profilePic FROM users WHERE id != ?";
      const allUsers = await new Promise((resolve, reject) => {
        db.query(allUsersQuery, [userId], (err, results) => {
          if (err) reject(err);
          resolve(results);
        });
      });
      return res.json(allUsers);
    }



    // Initialize a set to store unique friend IDs
    //set stores unique values
    const friendIdsSet = new Set(friendIds);

    // Fetch user IDs of friends of friends who are not already friends with the given user
    const friendsOfFriendsIds = await new Promise((resolve, reject) => {
      const q = "SELECT followeduserid FROM relationships WHERE followeruserid IN (?) AND followeduserid NOT IN (?)";
      db.query(q, [friendIds, friendIds], (err, results) => {
        if (err) reject(err);
        const fofIds = results.map(row => row.followeduserid);
        resolve(fofIds.filter(id => !friendIdsSet.has(id) && id !== userId)); // Filter out already known friends and current user
      });
    });

    // If there are no suggested friends, return a message indicating so
    if (friendsOfFriendsIds.length === 0) {
      return res.json({ message: "You don't have any new suggested friends." });
    }

    // Fetch user data for each suggested friend
    const suggestedFriendsData = [];

    for (const fofId of friendsOfFriendsIds) {
      const userDataQuery = "SELECT id, username, profilePic FROM users WHERE id=?";
      const userData = await new Promise((resolve, reject) => {
        db.query(userDataQuery, [fofId], (err, results) => {
          if (err) reject(err);
          resolve(results[0]); 
        });
      });
      suggestedFriendsData.push(userData);
    }

    // Send the user data of suggested friends in the response
    res.json(suggestedFriendsData);
  } catch (error) {
    // Handle any errors that occur during the execution of the API
    res.status(500).json({ error: "Internal Server Error" });
  }
};





//to get suggested friends ids

export const getSuggestedFriends = (req, res) => {
  // SQL query to get the users followed by the provided user
  const q = "SELECT followeduserid FROM relationships WHERE followeruserid = ?";
  
  // Set to store the IDs of friends to avoid duplicates
  let friendIdsSet = new Set();

  // Function to recursively fetch friends of friends
  const fetchFriendsOfFriends = (userIds) => {
    // SQL query to get the users followed by the provided list of user IDs
    let friendsOfFriendsQuery;
    if (userIds.length > 0) {
      friendsOfFriendsQuery = "SELECT followeduserid FROM relationships WHERE followeruserid IN (?)";
    } else {
      // If there are no initial friend IDs, suggest all other users
      const suggestAllUsersQuery = "SELECT id FROM users WHERE id != ?";
      db.query(suggestAllUsersQuery, [req.query.followeruserid], (err, allUsers) => {
        if (err) return res.status(500).json(err);
        const allUserIds = allUsers.map(user => user.id);
        return res.status(200).json(allUserIds);
      });
      return; // Exit the function early
    }

    db.query(friendsOfFriendsQuery, [userIds], (err, data) => {
      if (err) return res.status(500).json(err);

      // Extract followed user IDs from the query result
      const followedUserIds = data.map(relationship => relationship.followeduserid);
      
      // Add new followed user IDs to the friendIds set
      followedUserIds.forEach(id => friendIdsSet.add(id));

      // Filter out the user IDs that have already been processed
      const newFollowedUserIds = followedUserIds.filter(id => !friendIdsSet.has(id));

      // Check if there are new followed user IDs
      if (newFollowedUserIds.length > 0) {
        console.log("New friends found. Continuing recursion...");
        // Recursively call fetchFriendsOfFriends if there are new followed user IDs
        fetchFriendsOfFriends(newFollowedUserIds);
      } else {
        console.log("No new friends found. Sending response...");
        // Convert set to array and remove the provided user's ID
        const friendIds = [...friendIdsSet].filter(id => id.toString() !== req.query.followeruserid.toString());
        // Send the unique friend IDs in the response
        res.status(200).json(friendIds);
      }
    });
  };

  // Start by fetching friends of the provided user
  db.query(q, [req.query.followeruserid], (err, data) => {
    if (err) return res.status(500).json(err);

    // Extract initial friend IDs
    const initialFriendIds = data.map(relationship => relationship.followeduserid);

    // Call the function to recursively fetch friends of friends
    fetchFriendsOfFriends(initialFriendIds);
  });
};















//to follow a user
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


//to unfollow a user
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