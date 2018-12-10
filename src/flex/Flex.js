import React, {Component} from 'react';
import './Flex.scss'
import ListInfo from "./ListInfo";
import Logic from "../static/utils/Logic";
import CtrlBox from "./CtrlBox";
import {Data} from "./Data";

const attrData = Data.getAttrData();
const getAttrLooped = Data.getAttrLooped;
const getAttr = Data.getAttr;

let justifyContent = attrData.justifyContent;
let flexDirection = attrData.flexDirection;
let flexWrap = attrData.flexWrap;
let alignItems = attrData.alignItems;
let alignContent = attrData.alignContent;


class Flex extends Component {
    constructor(props) {
        super();
        this.state = {
            flexObj: '',
            ctrl: [
                {
                    data: 10,
                    info: "条目数量",
                    fun: (input) => {
                        this.notifyInputChanged(0, input)
                    }
                },
                {
                    data: 1000,
                    info: "容器宽度",
                    fun: (input) => {
                        this.notifyInputChanged(1, input)
                    }
                },
                {
                    data: 300,
                    info: "容器高度",
                    fun: (input) => {
                        this.notifyInputChanged(2, input)
                    }

                },
                {
                    data: "auto",
                    info: "条目宽度",
                    fun: (input) => {
                        this.notifyInputChanged(3, input)
                    }
                },
                {
                    data: "auto",
                    info: "条目高度",
                    fun: (input) => {
                        this.notifyInputChanged(4, input)
                    }
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <CtrlBox
                    ctrl={this.state.ctrl}
                    onCountChanged={this.state.ctrl[0].fun}
                    onBoxWidthChanged={this.state.ctrl[1].fun}
                    onBoxHeightChanged={this.state.ctrl[2].fun}
                    onItemWidthChanged={this.state.ctrl[3].fun}
                    onItemHeightChanged={this.state.ctrl[4].fun}/>

                <div className="Flex" style={{
                    width: this.state.ctrl[1].data + "px",
                    height: this.state.ctrl[2].data + "px",
                    flexDirection: getAttrLooped(flexDirection),
                    flexWrap: getAttrLooped(flexWrap),
                    justifyContent: getAttrLooped(justifyContent),
                    alignItems: getAttrLooped(alignItems),
                    alignContent: getAttrLooped(alignContent)
                }}>
                    {this.formItem()}
                </div>

                <ListInfo data={this.state.flexObj}
                          onItemClick={this.onItemClick.bind(this)}/>
            </div>
        )
    }

    /**
     * 点击下方条目
     * @param index
     */
    onItemClick(index) {
        switch (index) {
            case 0:
                flexDirection.index++;
                break;
            case 1:
                flexWrap.index++;
                break;
            case 2:
                justifyContent.index++;
                break;
            case 3:
                alignItems.index++;

                break;
            case 4:
                alignContent.index++;
                break;
            default:
                break;
        }
        this.notifyAttrChanged();
    }


    formItem() {
        let color = [];
        for (let i = 0; i < this.state.ctrl[0].data; i++) {
            color.push(Logic.randomRGB(.8))
        }
        return (
            color.map((item, index) => {
                return (
                    <div className={"title"} style={{
                        backgroundColor: item,
                        width: this.state.ctrl[3].data + "px",
                        height: this.state.ctrl[4].data + "px"
                    }} key={index}>
                        Toly{index}
                    </div>
                );
            })
        )
    }

    componentDidMount() {
        this.notifyAttrChanged();
    }

    /**
     * 底部监听--属性变化
     */
    notifyAttrChanged() {
        this.setState({
            flexObj: {
                "flex-direction": getAttr(flexDirection),//元素排列方向
                "flex-wrap": getAttr(flexWrap),//换行
                "justify-content": getAttr(justifyContent),//水平对齐方式
                "align-items": getAttr(alignItems),//垂直对齐方式
                "align-content": getAttr(alignContent),//多行垂直对齐方式,
            }
        });
    }

    /**
     * 输入监听--数据变化
     * @param index
     * @param input
     */
    notifyInputChanged(index, input) {
        let ctrl = this.state.ctrl;
        ctrl[index].data = input;
        this.setState({
            ctrl
        });
    }
}

export default Flex;