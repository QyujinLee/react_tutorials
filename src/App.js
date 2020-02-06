import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';

  class App extends Component {
    render() {
      /* 
        MyName이라는 컴포넌트를 불러오고,
        그 컴포넌트 내에서 props를 호출한다면 
        자식 컴포넌트에 선언된 같은 이름의 props를 가져다 쓴다.
        기본값도 설정 가능
      */
      return <MyName/>;
    }
  }

export default App;
