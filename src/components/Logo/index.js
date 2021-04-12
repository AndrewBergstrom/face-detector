import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./style.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt shadow-2"
        options={{ max: 55 }}
        style={{ height: "100px", width: "100px" }}
      >
        <div className="pa3">
          <img style={{ paddingTop: "5px" }} src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
