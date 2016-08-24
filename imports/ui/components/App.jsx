import React, { Component } from 'react';

import DummyComponent from './DummyComponent.jsx';

// App component - represents the whole app
export default class App extends Component {
  getSteps() {
    return [
      { _id: 1, text: 'These list items started as JSON data...' },
      { _id: 2, text: '...then got mapped to an array of DOM components...' },
      { _id: 3, text: '...which was then told to render via {handlebars} in a higher component...' },
      { _id: 4, text: '...and finally exported, transpiled, and actually rendered!' },
    ];
  }

  renderSteps() {
    return this.getSteps().map((step) => (
      <DummyComponent key={step._id} dummy={step} />
    ));
  }

  render() {
    return (
      <div className="container">

        <ul>
          {this.renderSteps()}
        </ul>
      </div>
    );
  }
}
