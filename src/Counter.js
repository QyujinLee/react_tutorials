import React, { Component } from 'react';

class Counter extends Component {
    // state는 객체여야만 한다.
    state = {
        number: 0
    }
    /* 
     * render()와 달리  아래 handle 메소드 두 개를 화살표함수로 표현한 이유는
     * 화살표 함수를 사용하지 않을 시 this의 target을 인지하지 못하기 때문
     */ 
    handleIncrease = () => {
        // this.state.number = this.state.number + 1   
        // ----> X 꼭 setState를 사용 할것 
        this.setState({
            number: this.state.number + 1
        })
    }
    
    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    /*
    handle 메소드를 보통 함수처럼 표현하고 싶을 시엔 생성자를 이용해야 한다.
    */
    constructor(props) {
        // 부모 컴포넌트인 Component의 생성함수를 호출해야함
        super(props);
        // handle 메소드의 this를 constructor 내부의 this임을 명시하고 바인딩
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    handleIncrease() {
        // this.state.number = this.state.number + 1   
        // ----> X 꼭 setState를 사용 할것 
        this.setState({
            number: this.state.number + 1
        })
    }
    
    handleDecrease(){
        this.setState({
            number: this.state.number - 1
        })
    }
    
    render() {
        return(
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                {/* 
                   이벤트 이름은 꼭 카멜케이스로 작성 ! ex) onClick
                   이벤트에 전달해주는 값은 꼭 함수! 함수호출로 하면 안됨!
                   ex) onClick={this.handleIncrease()} --> 이렇게 하면
                   해당 함수가 렌더링 시에 무한으로 호출됨
                */}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;