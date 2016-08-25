import React, { Component, PropTypes } from 'react';

// Step component - replace with actual component
export default class Step extends Component {
  render() {
    return (
      <li>{this.props.step.text}</li>
    );
  }
}

Step.propTypes = {
  // This component gets the dummy data to display through a React prop.
  // We can use propTypes to indicate it is required
  step: PropTypes.object.isRequired,
};
