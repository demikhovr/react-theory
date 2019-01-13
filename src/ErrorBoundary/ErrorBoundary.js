import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { state, props } = this;

    if (state.hasError) {
      return <h1 style={{ color: 'red' }}>Something went wrong</h1>;
    }

    return props.children;
  }
}
