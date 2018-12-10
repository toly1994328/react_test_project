import React, {Component} from 'react';
import modifyPropsHoc from "./E";

class G extends Component {
    render() {
        return (
            <p>
                BodyChild
            </p>
        )
    }
}

export default modifyPropsHoc(G)

