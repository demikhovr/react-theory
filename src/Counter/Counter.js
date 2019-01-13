/* eslint-disable import/no-cycle */
import React, { Component } from 'react';
import Counter2 from '../Counter2/Counter2';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  addCounter() {
    return this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  render() {
    const { state } = this;

    return (
      <>
        <h2>
          Counter&nbsp;
          { state.counter }
        </h2>
        <Counter2 />
        <button type="button" onClick={() => this.addCounter()}>+</button>
        <button type="button" onClick={() => this.setState({ counter: state.counter - 1 })}>-</button>
      </>
    );

    // return [
    //   <h2 key="111">Counter {this.state.counter}</h2>,
    //   <button key="222" type="button" onClick={this.addCounter}>+</button>,
    //  <button
    //    key="333"
    //    type="button"
    //    onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>,
    // ];
  }
}
