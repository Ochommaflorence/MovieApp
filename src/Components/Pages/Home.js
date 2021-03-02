import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero-container">
      <video src="video/video1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <button className="btn btn-outline-warning btn-lg">GET STARTED</button>
        <button className="btn btn-outline-warning btn-lg">
          WATCH TRAILER <i className="far fa-play-circle" />
        </button>
      </div>
    </div>
  );
};

export default Home;
