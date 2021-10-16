import "./intro.scss";
import React, { useEffect, useRef } from "react";
import { init } from "ityped";

function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor:true,
      strings: ["Full Stack Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/hero.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Gyasuddin Ansari</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
