import { db } from "../connect.js";

// // Function to create a new message
// export const createMessage = (req, res) => {
//   const { conversationId, sender, text } = req.body;

//   const q = "INSERT INTO Messages (conversationId, sender, text) VALUES (?, ?, ?)";

//   db.query(q, [conversationId, sender, text], (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.status(200).json(result.insertId);
//   });
// };


// Function to create a new message
export const createMessage = (req, res) => {
  const { conversationId, sender, text } = req.body;

  // Validate and sanitize inputs if necessary

  const q = "INSERT INTO Messages (conversationId, sender, text) VALUES (?, ?, ?)";

  db.query(q, [conversationId, sender, text], (err, result) => {
    if (err) return res.status(500).json(err);

    // Retrieve the inserted message
    const messageId = result.insertId;
    const selectQuery = "SELECT * FROM Messages WHERE id = ?";

    db.query(selectQuery, [messageId], (err, messageResult) => {
      if (err) return res.status(500).json(err);

      // Return the inserted message data
      const insertedMessage = messageResult[0];
      res.status(200).json(insertedMessage);
    });
  });
};



// Function to get messages of a conversation
export const getConversationMessages = (req, res) => {
  const conversationId = req.params.conversationId;

  const q = "SELECT * FROM Messages WHERE conversationId = ?";

  db.query(q, [conversationId], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
};
