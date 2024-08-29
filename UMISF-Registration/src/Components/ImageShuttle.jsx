import React from "react";
import "./ImageShuttle.css";
import shuttleCock from "../assets/shuttlecock.png";

export default function ImageShuttle() {
  return (
    <div className="imageShuttle">
      <img src={shuttleCock} alt="" />
    </div>
  );
}
