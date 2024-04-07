import "./message.css";
import { format } from "timeago.js";
import { AuthContext } from "../../context/authContext";
import { useContext, useEffect, useRef, useState } from "react"
import axios from "axios";


export default function Message({ message, own }) {

  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios("http://localhost:8800/api/users/find/" + message.sender);
        setUser(res.data); 
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [message]);


  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          // src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          src={"/upload/"+ user?.profilePic}
          alt=""
        />
        <p className="messageText">{message.text}</p>
        
        {/* <p className="messageText">helloo this is a message</p> */}
      </div>
    
      <div className="messageBottom">{format(message?.created_at)}</div>
      {/* <div className="messageBottom">1 hr ago</div> */}
    </div>
  );
}
