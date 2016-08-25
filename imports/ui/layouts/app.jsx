import React from 'react';
import { Navigation } from '../components/navigation.jsx';
import { Footer } from '../components/footer.jsx';

export const App = ( { children } ) => (
  <div>
    <Navigation />
    { children }
    <Footer />
  </div>
)
