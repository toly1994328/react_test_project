import React, {Component} from 'react';
import toolBar from "../toolbar/ToolBar";
import Logic from "../static/utils/Logic";
import './Page.scss'

class Home extends Component {
    render() {
        return (
            <div>
                <img className={"img-bg"} src={Logic.loadImg("home.png")} alt=""/>
            </div>
        )
    }
}

export default toolBar(Home)