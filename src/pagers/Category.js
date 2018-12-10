import React, {Component} from 'react';
import Logic from "../static/utils/Logic";
import toolBar from "../toolbar/ToolBar";

 class Category extends Component {
    render() {
        return (
            <div>
                <img className={"img-bg"} src={Logic.loadImg("msg.png")} alt=""/>
            </div>
        )
    }
}

export default toolBar(Category)
