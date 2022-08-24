import React from "react";
import { IoIosEye } from "react-icons/io";
import "../index.css";

const Header = () => {
  return (
    <div className="header">
      <img id="image" src="./memes2.jpg" alt="" />
      <h1>Meme Generator</h1>
      <p>
        <span id="icon">
          <IoIosEye size={30} />
        </span>
        <span id="name">Rohith</span> k shetty
      </p>
    </div>
  );
};

export default Header;
