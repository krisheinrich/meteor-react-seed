import React from 'react';

import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';

export const App = ( { children } ) => (
  <div>
    <Navigation />
    { children }
    <Footer />
  </div>
)
