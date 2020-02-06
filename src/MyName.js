import React, {Component} from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다.
    </div>
  );
};

MyName.defaultProps = {
  name: "으라차"
}

// 함수형 컴포넌트는 lifeCycle과 state의 기능이 없음
// 그러나 초기 마운트 속도가 조금 빠름
// 값을 가져와서 보여주기만 하는 용도 일때 용이한 함수형 컴포넌트

// 클래스형 컴포넌트
// class MyName extends Component {
//   // 아래와 같은 기본값 설정 방식이 더 현 상황과 부합
//   static defaultProps = {
//     name: '기본이름'
//   }
//   render() {
//       return(
//         <div>
//             myname is <b>{this.props.name}</b>.
//         </div>
//       );
//   }
// }

// MyName.defaultProps = {
//   name: "기본이름"
// }

export default MyName;