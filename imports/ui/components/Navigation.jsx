import React from 'react';
import { IndexLink, Link } from 'react-router';

export const Navigation = () => (
  <ul>
    <li><IndexLink to="/" activeClassName="active">Index</IndexLink></li>
    <li><Link to="/features" activeClassName="active">Features</Link></li>
    <li><Link to="/react-data" activeClassName="active">Data in React</Link></li>
  </ul>
)
