import React from "react";
import { image } from "../data/data";

function About() {
  return (<div id="about">
    <h2>About Me</h2>
    <p>Hey I'm a Web Developer student</p>
    <img 
    src= {image}
    alt="I made this"
    />
  </div>
  );
}

export default About;
