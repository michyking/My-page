import React from 'react'
import "./about.css";
import image from "./img/LAM_9309.png";

const About = () => {
  return (
    <div className="container1">
      <div>
        <img src={image} alt="LOGO" />
      </div>
      <div className="about-content">
        <h1>Personal Info</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dicta
          excepturi veniam tempora maxime. Commodi eligendi ducimus magni
          quibusdam cupiditate aliquid et reiciendis nihil rem alias repudiandae
          autem quaerat ipsam, debitis consectetur! Quod aperiam quasi iure
          totam minima doloribus nostrum dolor nulla ullam eius, explicabo ad
          exercitationem obcaecati. Laborum, nisi.
        </p>
      </div>
    </div>
  )
}

export default About