import React from "react";
import "./Message.css";

const Message = ({ message, user, classs }) => {
  console.log("class name", classs)

  if (user) {
    return (
      <div className={`messageBOX ${classs}`}>{`${user}:${message}  `}</div>
    );
  } else{
    return (
      <div className={`messageBOX ${classs}`}>{`You :${message.message}`}</div>
    );
  }
};

export default Message;
