import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <header className="hero">
        <h1 className="hero-text">
          Welcome, I am
          <span> Lorem Ipsum Stuff.</span>
        </h1>
        <p className="home-sub-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, incidunt! Facilis repellat voluptatibus accusantium, numquam veritatis voluptatum sit quidem autem, consequuntur maxime nisi aspernatur ipsum repudiandae. Minus id aperiam nam.
        </p>
        <div className="icons">
          <Link className="icon-link">
            <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
          </Link>
          <Link className="icon-link">
            <FontAwesomeIcon icon={faGithub} className="icon gh"/>
          </Link>
          <Link className="icon-link">
            <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
          </Link>
            
          
          
        </div>
        
      </header>
    </div>
  );
}

export default Home;
