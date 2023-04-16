import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <p className="primary-subheading">About</p>
      <p className="primary-stext">
        Create & Monetize Mobile Games in just Some hours!
      </p>
      <p className="primary-text">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.
        Dolor turpis molestie dui magnis facilisis at fringilla quam. Non
        tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis
        at fringilla quam.
      </p>
      <div className="about-buttons-container">
        <button className="secondary-button">Learn More</button>
        <button className="watch-video-button">
          <BsFillPlayCircleFill /> Watch Video
        </button>
      </div>
    </div>
  );
};

export default About;
