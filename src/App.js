import React, { Fragment, Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

  class App extends Component {

    // 렌더링과 관련 없기에 state에 추가하지 않았음
    id = 0;

    state = {
      information : [],
    }

    handleCreate = (data) => {
      /* 기존 state의 불변성 유지를 위하여 state를 가져와서 
         concat 함수로 추가
      */
      const { information } = this.state;
      this.setState({
        information : information.concat({
          ...data,
          id: this.id++
        })
      });
    }

    handleRemove = (id => {
      const {information} = this.state;
      this.setState({
        information: information.filter(info => info.id !== id)
      })
    })

    render() { 
      return (
        <div>
          {/* submit되면 onCreate라는 이벤트가 발생한다 */}
          <PhoneForm
            onCreate={this.handleCreate}
          />
          <PhoneInfoList 
            data={this.state.information}
            onRemove = {this.handleRemove}
          />
        </div>   
      );
    }
  }

export default App;
