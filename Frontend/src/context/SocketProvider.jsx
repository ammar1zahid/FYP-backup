import React, { useEffect, useRef,useContext } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "../context/authContext";

const SocketProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    return () => {
      socket.current.disconnect(); // Disconnect socket when unmounting component
    };
  }, []);

  useEffect(() => {
    if (currentUser) {
      socket.current.emit("addUser", currentUser.id);
    }
  }, [currentUser]);

  return <>{children}</>;
};

export default SocketProvider;
