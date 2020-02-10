import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: ''
    }

    // 업데이트가 일어났을 시 모든 컴포넌트를 업데이트 하지 않고 
    // 필요한 부분만 렌더링
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState) {
            return true;
        }        
        return this.props.info !== nextProps.info;
    }

    // 수정모드 flag
    handleToggleEdit = () => {
        //true -> false
            //onUpdate
        //false -> true
            //state 에 info 값들 넣어주기
            const { info, onUpdate } = this.props;

            if(this.state.editing) {
                onUpdate(info.id, {
                    name: this.state.name,
                    phone: this.state.phone
                });
            } else {
                this.setState({
                    name: info.name,
                    phone: info.phone
                });
            }

        this.setState({
            editing: !this.state.editing
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRemove = () => {
        const {info, onRemove, onUpdate} = this.props;
        onRemove(info.id);
    }
    render() {
        const { name, phone } = this.props.info;
        const { editing } = this.state;
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }

        console.log("name : " + name);

        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div>
                                <input 
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                            </div>
                            <div>
                                <input 
                                    name="phone"
                                    onChange={this.handleChange}
                                    value={this.state.phone}
                                />
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    { editing ? '적용' : '수정' }
                </button>
            </div>
        );
    }
}

export default PhoneInfo;