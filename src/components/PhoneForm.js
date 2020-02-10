import React , { Component } from 'react';

class PhoneForm extends Component {
    // v16.3 이후 부터 DOM에 직접 접근을 위한 선언
    // 차트 관련 외부 라이브러리 사용 시 ref 필요
    input = React.createRef();

    state = {
        name : '',
        phone : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
          name: '',
          phone: ''
        });
        this.input.current.focus();
      }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                    ref={this.input}
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
            <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;