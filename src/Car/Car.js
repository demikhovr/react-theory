import React, { Component } from 'react';
import classes from './Car.module.css';
import withClass from '../hoc/withClass';

class Car extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const { props } = this;

    if (props.index === 0) {
      this.inputRef.current.focus();
    }
  }

  render() {
    const { props } = this;
    const inputClasses = [classes.input];

    inputClasses.push(props.name.length ? classes.green : classes.red);

    if (props.name.length > 4) {
      inputClasses.push(classes.bold);
    }

    return (
      <React.Fragment>
        <h3>
          Car name:&nbsp;
          {props.name}
        </h3>
        <p>
          Year:&nbsp;
          <strong>{props.year}</strong>
        </p>
        <input
          ref={this.inputRef}
          type="text"
          className={inputClasses.join(' ')}
          onChange={props.onChangeName}
          value={props.name}
        />
        <button onClick={props.onDelete} type="button">Delete</button>
      </React.Fragment>
    );
  }
}

export default withClass(Car, classes.Car);
