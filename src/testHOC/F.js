import React, {Component} from 'react';
import modifyPropsHoc from "./E";

class F extends Component {
    render() {
        return (
            <div>
                我是div---你不服?
                <p>我是p---你不服?</p>
            </div>
        )
    }

    componentWillMount() {
        console.log("=====原生=====componentWillMount==========");
    }
}


export default modifyPropsHoc(F)

