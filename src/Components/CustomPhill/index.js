import React from "react";
import "./style.css";

function CustomPhill(props) {
  return (
    <div className=" wrapper">
      <p>{props.title}</p>
      <div className="text-white">
        <img src={props.img}></img>
        <span>{props.text}</span>
      </div>
    </div>
  );
}

export default CustomPhill;
