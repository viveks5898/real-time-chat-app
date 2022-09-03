import { React, useEffect, useState } from "react";
import "./Join.css";
import logo from "../../src/talkup.webp";
import { Link } from "react-router-dom";



let user;
const Join = () => {
  const [state, setState] = useState("");
  const sendUser = () => {
    user = document.getElementById("input-class").value;
    document.getElementById("input-class").value = "";
  };
  useEffect(()=>{
    sendUser()
  },[])
  return (
    <div className="Joinpage">
      <div className="Joincontainer">
        <img src={logo} alt="" />
        <h1>My chat </h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          id="input-class"
          onChange={(e) => setState(e.target.value)}
        />
        <Link onClick={(e) => (!state ? e.preventDefault() : null)} to="/chat">
          <button onClick={sendUser} className="joinbtn">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
