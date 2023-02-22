import React from "react";
import Timer from "../../Components/Timer/Timer";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="timer-text">this website will be launched in:</h1>
      <Timer duration={3*24*60*60*1000} />
      <div className="home-items">
        <h3 className="h3">Join the waiting list</h3>
        <input type="text" value="" className="mail-input" placeholder="Email address"/>
        <input type="button" value="Subscribe" className="mail-btn" />
      </div>
    </div>
  );
};

export default Home;
