import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div className = "main-app-container">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-app-header">
              <p className="navbar-brand">DAILY JOURNAL</p>
            </div>
            {/* <div className="nav-header-links"> */}
              <ul className="nav-app-links">
                <li id="home"><Link to="/" style={{ textDecoration: 'none' }}>HOME</Link></li>
                <li id="about"><Link to="/about" style={{ textDecoration: 'none' }}>ABOUT</Link></li>
                <li id="contact"><Link to="/contact" style={{ textDecoration: 'none' }}>CONTACT</Link></li>
              </ul>
            {/* </div> */}
          </div>
        </nav>
        


        <hr className="style-one"/>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <div className="footer-padding">
        <div className="footer">
          <p>The Waraynon 2019</p>
        </div>
      </div>
    </Router >
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2 className="switch-header">Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2 className="switch-header">About</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2 className="switch-header">Contact</h2>
    </div>
  );
}
