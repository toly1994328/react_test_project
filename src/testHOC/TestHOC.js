import React, {Component} from 'react';
import B from "./B";
import C from "./C";
import F from "./F";
import G from "./G";

export default class TestHOC extends Component {
    render() {
        return (
            <div>
                <B title={"浮生一媚淡千娇"} name={"巫缨"}/>
                <C/>
                <F/>
                <G/>
            </div>
        )
    }
}

