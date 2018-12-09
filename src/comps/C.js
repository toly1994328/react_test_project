import React, {Component} from 'react';
import CommonBox from "./CommonBox";

class C extends Component {
    render() {
        return (
            <div>
                <h1>今天天气好晴朗</h1>
                <h1>{this.props.title}</h1>
                <img width="250" src={require('../imgs/bg2.jpg')}/>
            </div>
        )
    }

    getTitle() {
        return '今天天气好晴朗'
    }
}

export default CommonBox(C)