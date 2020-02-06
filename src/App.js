import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';

  class App extends Component {
    render() {
      // const style = {
      //   // css에서는 'background-color'라고 썼지만 JSX로는 카멜케이스 적용
      //   backgroundColor: 'black',
      //   padding: '16px',
      //   color: 'white',
      //   fontSize: '20px'
      // };

      return(
        <Fragment>
          {/* 변수의 실제 값은 {변수명} 으로 표현 */}
          <div className="App">
            hi there
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
