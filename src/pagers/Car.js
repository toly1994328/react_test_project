import React, {Component} from 'react';
import Logic from "../static/utils/Logic";
import toolBar from "../toolbar/ToolBar";

class Car extends Component {
    render() {
        return (
            <div>
                <img className={"img-bg"} src={Logic.loadImg("book.png")} alt=""/>
            </div>
        )
    }
}

export default toolBar(Car)