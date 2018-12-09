import React, {Component} from 'react';
import './CtrlBox.scss'

class CtrlBox extends Component {
    constructor(props) {
        super();
        this.state = {
            value: 'toly'
        }
    }

    render() {
        return (
            <div className="right-ctrl">

                <div className={"container"}>
                    <label>{this.props.ctrl[0].info}:</label>
                    <input
                        onChange={(v) => {
                            this.props.onCountChanged && this.props.onCountChanged(v.target.value);
                        }}
                        defaultValue={this.props.ctrl[0].data}/>
                    <label>个</label>
                </div>

                <div className={"container"}>
                    <label>{this.props.ctrl[1].info}:</label>
                    <input
                        onChange={(v) => {
                            this.props.onBoxWidthChanged && this.props.onBoxWidthChanged(v.target.value);
                        }}
                        defaultValue={this.props.ctrl[1].data}/>
                    <label>px</label>
                </div>

                <div className={"container"}>
                    <label>{this.props.ctrl[2].info}:</label>
                    <input
                        onChange={(v) => {
                            this.props.onBoxHeightChanged && this.props.onBoxHeightChanged(v.target.value);
                        }}
                        defaultValue={this.props.ctrl[2].data}/>
                    <label>px</label>
                </div>

                <div className={"container"}>
                    <label>{this.props.ctrl[3].info}:</label>
                    <input
                        onChange={(v) => {
                            this.props.onItemWidthChanged && this.props.onItemWidthChanged(v.target.value);
                        }}
                        defaultValue={this.props.ctrl[3].data}/>
                    <label>px</label>
                </div>
                <div className={"container"}>
                    <label>{this.props.ctrl[4].info}:</label>
                    <input
                        onChange={(v) => {
                            this.props.onItemHeightChanged && this.props.onItemHeightChanged(v.target.value);
                        }}
                        defaultValue={this.props.ctrl[4].data}/>
                    <label>px</label>
                </div>
            </div>
        )
    }
}

export default CtrlBox;