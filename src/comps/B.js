import React, {Component} from 'react';
import CommonBox from "./CommonBox";

class B extends Component {
    constructor(props) {
        super();

    }

    render() {
        return (
            <div>
                标题：{this.props.title}<br/>
                姓名：{this.props.name}<br/>
                性别：{this.props.sex}<br/>

                <img width="250" src={require('../imgs/bg1.jpg')}/>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.title);
    }
}

export default CommonBox(B);