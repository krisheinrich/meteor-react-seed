import React, { Component, PropTypes } from 'react';

// Dummy component - replace with actual component
export default class DummyComponent extends Component {
  render() {
    return (
      <li>{this.props.dummy.text}</li>
    );
  }
}

DummyComponent.propTypes = {
  // This component gets the dummy data to display through a React prop.
  // We can use propTypes to indicate it is required
  dummy: PropTypes.object.isRequired,
};
