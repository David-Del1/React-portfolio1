import { Component } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { useState } from 'react';

import NavBar from '../components/NavBar';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';

import React from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle); 
  };
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>

      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>

      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/about" exact>
              <About />
            </Route>

            <Route path="/portfolio" exact>
              <Portfolio />
            </Route>

            <Route path ="/blog" exact>
              <Blog />
            </Route>

            <Route path ="/contact" exact>
              <Contact />
            </Route>

          </Switch>
            
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;

