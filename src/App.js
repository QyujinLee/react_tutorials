import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import MyComponent from './MyComponent';

  class App extends Component {

    state = {
      counter: 1,
    }
    
    constructor(props) {
      super(props);
      console.log("constructor");
    }

    componentDidMount() {
      console.log("componentDidMount");
      // console.log(this.myDiv.getBoundingClientRect().height);
    }

    handleClick = () => {
      this.setState({
        counter : this.state.counter + 1
      });
    };

    render() {
      return(
        <div>
          <MyComponent value={this.state.counter}/>
          <button onClick={this.handleClick}>Click Me</button>
        </div>
      );
    }
  }

export default App;
