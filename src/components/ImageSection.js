import React from 'react';
import about from '../img/about.png';

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4> I am
          <span> David Delgadillo</span>
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolores animi eum modi nam commodi.</p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name:</p>
            <p>Age:</p>
            <p>Nationality:</p>
            <p>Languages:</p>
            <p>Address:</p>
          </div>
          <div className="right-section">
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>

        <button className="btn">Download CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
