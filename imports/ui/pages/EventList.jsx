import React, { Component } from 'react';

import Step from '../components/Step.jsx';

// App component - represents the whole app
export class EventList extends Component {
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
      <Step key={step._id} step={step} />
    ));
  }

  render() {
    return (
      <main>
        <div className="container">
          <h3>Here's how data moves in React:</h3>
          <ul className="square-list">
            {this.renderSteps()}
          </ul>
        </div>
      </main>
    );
  }
}
