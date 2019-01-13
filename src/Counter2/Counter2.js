/* eslint-disable import/no-cycle */
import React from 'react';
import { ClickedContext } from '../App';

const Counter2 = () => (
  <div style={{
    width: 250,
    margin: '0 auto',
    border: '1px solid #ccc',
  }}
  >
    <h3>Counter2</h3>
    <ClickedContext.Consumer>
      {clicked => (clicked ? <p>Clicked</p> : null)}
    </ClickedContext.Consumer>
  </div>
);

export default Counter2;
