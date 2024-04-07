import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
   const [user, setUser] = useState(null);


  useEffect(() => {

    // Parse the string to an array
    const membersArray = JSON.parse(conversation.members);
    const friendId = membersArray.find((m) => m !== currentUser.id);

    const getUser = async () => {
      try {
        const res = await axios("http://localhost:8800/api/users/find/" + friendId);
        setUser(res.data); 
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        //  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
         src={"/upload/" + user?.profilePic}

        alt=""
      />

      <span className="conversationName">{user?.username}</span>
      {/* <span className="conversationName">{user.username}</span> */}
    
    </div>
  );
}
