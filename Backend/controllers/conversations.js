import { db } from "../connect.js";

// Function to create a new conversation
// export const createConversation = (req, res) => {
//   const { senderId, receiverId } = req.body;

//   const q = "INSERT INTO Conversations (members) VALUES (?)";

//   db.query(q, [[senderId, receiverId]], (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.status(200).json({ id: result.insertId });
//   });
// };




// Function to create a new conversation
export const createConversation = (req, res) => {
  const { senderId, receiverId } = req.body;

  // Serialize the members array into JSON
  const members = JSON.stringify([senderId, receiverId]);

  const q = "INSERT INTO Conversations (members) VALUES (?)";

  db.query(q, [members], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ id: result.insertId });
  });
};





// Function to get conversations of a user
export const getUserConversations = (req, res) => {
  const userId = parseInt(req.params.userId); // Convert userId to integer

  const q = "SELECT * FROM Conversations WHERE JSON_CONTAINS(members, JSON_ARRAY(?))";

  db.query(q, [userId], (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(200).json(result);
  });
};



// Function to get conversation including two userIds
export const getConversationBetweenUsers = (req, res) => {
  const { firstUserId, secondUserId } = req.params;

  const parsedFirstUserId = parseInt(firstUserId); // Convert firstUserId to integer
  const parsedSecondUserId = parseInt(secondUserId); // Convert secondUserId to integer

  const q = "SELECT * FROM Conversations WHERE JSON_CONTAINS(members, JSON_ARRAY(?)) AND JSON_CONTAINS(members, JSON_ARRAY(?))";

  db.query(q, [parsedFirstUserId, parsedSecondUserId], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result[0]);
  });
};

