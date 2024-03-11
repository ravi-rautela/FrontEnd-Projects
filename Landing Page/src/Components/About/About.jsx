import React from "react";
import "./about.css";

import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img"/>
        <img src={play_icon} alt="" className="play-icon"/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quod
          animi suscipit repudiandae nobis fugiat nulla doloremque? Delectus
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          reprehenderit vel consectetur hic eligendi accusantium enim
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit omnis
          vel cum facilis, ipsa provident minus soluta repellat, esse eum sed
          tempora fugiat.
        </p>
      </div>
    </div>
  );
};

export default About;
