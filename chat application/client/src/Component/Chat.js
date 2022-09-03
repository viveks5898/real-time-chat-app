import React, { useEffect, useState } from "react";
import { user } from "../Component/Join";
import socketIo from "socket.io-client";
import "./Chat.css";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";
const ENDPOINT = "http://localhost:8000/";
let socket;

const Chat = () => {
  const [id, setId] = useState("");
  const [messages, setMessages] = useState([]);

  const socket = socketIo(ENDPOINT, { transports: ["websocket"] });
  const sendfunc = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };
  useEffect(() => {
    socket.on("connect", () => {
      setId(socket.id);
    });
    socket.emit("Joined", { user });
    socket.on("welcome", (data) => {
      setMessages([...messages, data]);
    });
    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
    });
    socket.on("leave", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    return () => {
      socket.emit("disconnects");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendmessage", (data) => {
      setMessages([...messages, data]);
    });
    return () => {
      socket.off();
    };
  }, [messages]);

  console.log("final", messages);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header"></div>
        <ScrollToBottom className="chatBox">
          {messages.map((item, i) => (
            <Message
              user={item.id === id ? "" : item.user}
              message={item.message}
              classs={item.message.id === id ? "left" : "right"}
            />
          ))}
        </ScrollToBottom>
        <div className="inputBox">
          <input
            onKeyPress={(event) => (event.key === "Enter" ? sendfunc() : null)}
            type="text"
            id="chatInput"
          />
          <button onClick={sendfunc} className="sendBtn">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
