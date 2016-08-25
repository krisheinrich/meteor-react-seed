import React, { Component } from 'react';

export class Features extends Component {
  getFeatures() {
    return [
      { _id: 1, text: 'Meteor', role: 'Development Platform' },
      { _id: 2, text: 'ES6', role: 'Modern Javascript syntax enhancing OOP, module loading, context binding, etc. (Meteor default)' },
      { _id: 3, text: 'MongoDB + Minimongo', role: 'Data storage for server and client, connected via pub/sub (Meteor default)' },
      { _id: 4, text: 'User Accounts', role: 'User registration/authentication system incorporating Google sign-in' },
      { _id: 5, text: 'ReactJS', role: 'Component templating and view rendering'  },
      { _id: 6, text: 'React Router', role: 'Client-side routing' },
      { _id: 7, text: 'MaterializeCSS (Material Design)', role: 'Modern design standard for clean, responsive UI components' },
    ];
  }

  renderFeatures() {
    return this.getFeatures().map((feature) => (
      <li><span className="feature-name">{feature.text}</span> - {feature.role}</li>
    ));
  }

  render() {
    return (
      <main id="features">
        <div className="container">
          <h3>Goodies bundled with this application include...</h3>
          <ul>
            {this.renderFeatures()}
          </ul>
          <p>...plus preconfigured routes/navigation (including 404 page), routing based on user logged in??, and other sweet features!</p>
        </div>
      </main>
    );
  }
}
