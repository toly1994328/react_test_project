import React, {Component} from 'react';
import CommonBox from "./CommonBox";

class B extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }

    }

    render() {
        return (
            <div>
                <input type="text" {...this.props}/><br/>

                标题：{this.props.defaultValue}<br/>
                姓名：{this.props.name}<br/>
                性别：{this.props.sex}<br/>

                <img width="250" src={require('../imgs/bg1.jpg')}/>
            </div>
        )
    }

    componentDidMount() {
        // console.log(this.props.title);
    }
}

export default CommonBox(B);