import React from "react";
import Navbar from "./Navbar";
import { AiOutlineUpload } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-text-section">
        <h1 className="primary-heading">Create & Monetize Mobile Games</h1>
        <p className="primary-text">
          Turn your game ideas into a reality with our intuitive and
          user-friendly platform, designed to help you create your own mobile
          games in just a few hours.
        </p>
        <br></br>
        <br></br>
        <input
          className="input-text"
          type="text"
          placeholder="Enter your App Name"
        />
        <br></br>
        <p className="primary-text">Upload the Game files:</p>
        <div className="upload-file">
          <button className="secondary-button">
            CSV for Story <AiOutlineUpload />{" "}
          </button>
          <button className="secondary-button">
            Game Assets <AiOutlineUpload />{" "}
          </button>
          <button className="secondary-button">
            App Icon <AiOutlineUpload />{" "}
          </button>
        </div>
        <br></br>
        <br></br>
        <button className="secondary-button1">
          Create the Game <FiArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;
