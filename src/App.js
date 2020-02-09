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
=======
import PhoneForm from './components/PhoneForm';

class App extends Component {
  handleCreate = (data) => {
    console.log("이름 : " + data.name);
    console.log("전화번호 : " + data.phone);
>>>>>>> 6ecf7f0cd565c3da87f98d90129286470ce8002c
  }

  render() {
    return (
      <div>
        {/* submit되면 onCreate라는 이벤트가 발생한다 */}
        <PhoneForm
          onCreate={this.handleCreate}
        />
      </div>   
    );
  }
}

export default App;
