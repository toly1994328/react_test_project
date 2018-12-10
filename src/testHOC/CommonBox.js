import React, {Component} from 'react';
import "./CommBox.scss"

function CommonBox(Son) {
    return class A extends Component {
        constructor(props) {
            super(props);
            this.state = {
                value: ""
            }

        }

        render() {
            const {name, ...otherProps} = this.props;//取出otherProps--过滤掉name

            const newProps = {
                defaultValue: this.state.value,
                onInput: (e) => {
                    this.setState({
                        value: e.target.value
                    })
                }
            };

            return (
                <div className="a-container">
                    <div className="header">
                        <div>提示</div>
                        <div className="close">X</div>
                    </div>
                    <div className="Son">
                        <Son sex={'女'}{...otherProps} {...newProps} ref={this.refC.bind(this)}></Son>
                    </div>
                </div>
            )
        }

        refC(instance) {
            // let has = instance.getTitle;
            // has && alert(has())
        }

    }
}

export default CommonBox;