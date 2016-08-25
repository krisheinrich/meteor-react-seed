import React from 'react';
import { IndexLink, Link } from 'react-router';


export default Navigation = () => (
  <nav>
    <div className="nav-wrapper">
      <div  className="container">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><IndexLink to="/" activeClassName="active">Index</IndexLink></li>
          <li><Link to="features" activeClassName="active">Features</Link></li>
          <li><Link to="react-data" activeClassName="active">Data in React</Link></li>
        </ul>
      </div>
    </div>
  </nav>
)
