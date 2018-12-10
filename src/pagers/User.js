import React, {Component} from 'react';
import Logic from "../static/utils/Logic";
import toolBar from "../toolbar/ToolBar";

class User extends Component {
    render() {
        return (
            <div>
                <img className={"img-bg"} src={Logic.loadImg("user.png")} alt=""/>
            </div>
        )
    }
}

export default toolBar(User)
