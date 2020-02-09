import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  handleCreate = (data) => {
    console.log("이름 : " + data.name);
    console.log("전화번호 : " + data.phone);
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
