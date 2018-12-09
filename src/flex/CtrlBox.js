import React, {Component} from 'react';
import './CtrlBox.scss'

class CtrlBox extends Component {

    render() {
        return (
            <div className="right-ctrl">
                {this.createItem(this.props.ctrl)}
            </div>
        )
    }

    createItem(ctrl) {
        return (
            ctrl.map((item, index) => {
                return (
                    <div className={"container"} key={index} >
                        <label>{this.props.ctrl[index].info}:</label>
                        <input
                            onChange={
                                (v) => {
                                    this.bindCallback(index, v);
                                }}
                            defaultValue={this.props.ctrl[index].data}/>
                        <label>px</label>
                    </div>
                );
            })
        )
    }

    /**
     * 绑定回调事件
     * @param index
     * @param v
     */
    bindCallback(index, v) {
        switch (index) {
            case 0:
                this.props.onCountChanged(v.target.value);
                break;
            case 1:
                this.props.onBoxWidthChanged(v.target.value);
                break;
            case 2:
                this.props.onBoxHeightChanged(v.target.value);
                break;
            case 3:
                this.props.onItemWidthChanged(v.target.value);
                break;
            case 4:
                this.props.onItemHeightChanged(v.target.value);
                break;
            default:
                break;
        }
    }
}

export default CtrlBox;