import React from 'react';
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';

export const Index = () => (
  <main>
    <div className="container">
      <div className="row">
        <div className="col s12 l7">
            <h1>Welcome to Meteor+ReactJS!</h1>
            <p className="description">Please enjoy this Meteor app boilerplate!</p>
            <p className="description">
              This app comes with preconfigured routing, React, and MaterializeCSS.
              The accounts system is ready to configure with Google, or you can use
               <code> meteor remove accounts-google </code> if you prefer to usernames
              or emails. Check out the list of features on the <a href="/features">Features</a> page, and
              if you're new to React, check out the <a href="/react-data">Data in React</a> page for info on
              how Javascript component data (JSX) is tranformed into HTML.
            </p>
          </div>
        <div className="col s12 l5">
          <div id="login-box">
            <AccountsUIWrapper />
          </div>
        </div>
      </div>
    </div>
  </main>
);
