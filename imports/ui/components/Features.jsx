import React, { Component } from 'react';

export default class Features extends Component {
  getFeatures() {
    return [
      { _id: 1, text: 'Meteor' },
      { _id: 2, text: 'ReactJS' },
      { _id: 3, text: 'React Router' },
      { _id: 4, text: 'MongoDB' },
      { _id: 5, text: 'ES6' },
      { _id: 6, text: 'User Accounts' },
    ];
  }

  renderFeatures() {
    return this.getFeatures().map((feature) => (
      <li>{feature.text}</li>
    ));
  }

  render() {
    return (
      <div className="container">

        <ul>
          {this.renderFeatures()}
        </ul>
      </div>
    );
  }
}
