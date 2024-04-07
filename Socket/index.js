const io = require("socket.io")(8900, {
    cors: {
      origin: "http://localhost:5173",
    },
  });
  
//when we need to send something from socket server to client we use io
//If we need to send to every client we use  io.emit
//If we need to send to a specific client we use  io.to(socketID).emit
  
   //array to store users
    let users = [];
  
   //function to check if user is already prensent in users array, if not it will add it
  const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
      users.push({ userId, socketId });
  };
  
  //function to remove a user from this array 
  const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
  };
  
  //Function to fetch a specific user
  const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
  };
  
  io.on("connection", (socket) => {
    //when ceonnect
    console.log("a user connected.");
  

    // //take userId and socketId from user
    socket.on("addUser", (userId) => {
      addUser(userId, socket.id);
      io.emit("getUsers", users);
    });
  
    // //send and get message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        //we find the reciver user to which message will be sent
        const user = getUser(receiverId);
        
      io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
      });
    });
  
    //when disconnect
    socket.on("disconnect", () => {
      console.log("a user disconnected!");
      removeUser(socket.id);
      io.emit("getUsers", users);
    });
  });
  