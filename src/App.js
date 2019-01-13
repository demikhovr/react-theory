/* eslint-disable import/no-cycle */
import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    console.log('App Constructor');
    super(props);
    this.state = {
      clicked: false,
      cars: [
        { name: 'Ford', year: 2018 },
        { name: 'Audi', year: 2016 },
        { name: 'Audi', year: 2016 },
        { name: 'Mazda', year: 2010 },
      ],
      showCars: false,
    };
  }

  componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  onChangeName(name, index) {
    const { state } = this;
    const cars = [...state.cars];
    const car = state.cars[index];
    car.name = name;
    cars[index] = car;
    this.setState({ cars });
  }

  deleteHandler(index) {
    const { state } = this;
    const cars = [...state.cars];
    cars.splice(index, 1);
    this.setState({ cars });
  }

  toggleCarsHandler() {
    this.setState(prevState => ({ showCars: !prevState.showCars }));
  }

  render() {
    console.log('Render');
    const divStyle = {
      textAlign: 'center',
      color: '#3498db',
    };

    const { state, props } = this;
    let cars = null;

    if (state.showCars) {
      cars = state.cars.map((car, index) => {
        const key = car + index;

        return (
          <ErrorBoundary key={key}>
            <Car
              name={car.name}
              year={car.year}
              index={index}
              onDelete={() => this.deleteHandler(index)}
              onChangeName={evt => this.onChangeName(evt.target.value, index)}
            />
          </ErrorBoundary>
        );
      });
    }

    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{props.title}</h1>
        <ClickedContext.Provider value={state.clicked}>
          <Counter />
        </ClickedContext.Provider>
        <hr />
        {state.cars.length
          ? (
            <button
              className="AppButton"
              style={{ marginTop: 20 }}
              onClick={() => this.toggleCarsHandler()}
              type="button"
            >
              Toggle cars
            </button>
          )
          : null}
        <button onClick={() => this.setState({ clicked: true })} type="button">
          Change clicked
        </button>
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px',
        }}
        >
          {cars}
        </div>
      </div>
    );
  }
}

export default App;
