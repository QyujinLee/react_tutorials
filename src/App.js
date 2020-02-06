import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';

  class App extends Component {
    render() {
      const name = "gyujin";
      const num = 1;
      return(
        <Fragment>
          <div>
            {
              1+1 == 2 ? "correct" : "incorrect"
            }
          </div>
          <div>
            {
              // true가 아니라면 아무 값도 표시 하지 않는 && 연산자 
              name === "gyujin" && <div>correct</div>
            }
          </div>

          {/*
            cf) 주석 처리 시 주석 기호를 {}안에 넣어 표기
          */}

          {/* IIFE(즉시실행함수표현)*/}
          <div>
            {
              (function() {
                if(num === 2) {
                  return <div>correct</div>
                } else {
                  return <div>incorrect</div>
                }
              })()
            }
          </div>

          <div>
            { // 화살표 함수
              (() => { // this, arguments, super 등의 개념이 없음
                if(num === 1) {
                  return <div>correct</div>
                } else {
                  return <div>incorrect</div>
                }
              })()
            }
          </div>

        </Fragment>
      );
    }
  }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
