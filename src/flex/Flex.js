import React, {Component} from 'react';
import './Flex.scss'
import ListInfo from "./ListInfo";
import Logic from "../utils/Logic";
import CtrlBox from "./CtrlBox";

let justifyContent = {
    index: 0,
    data: ["normal", "flex-start", "flex-end", "center", "space-between", "space-around"]
};
let flexDirection = {
    index: 0,
    data: ["row", "row-reverse", "column", "column-reverse"]
};
let flexWrap = {
    index: 0,
    data: ["nowrap", "wrap", "wrap-reverse"]
};
let alignItems = {
    index: 0,
    data: ["normal", "stretch", "flex-start", "flex-end", "center", "baseline"]
};
let alignContent = {
    index: 0,
    data: ["normal", "stretch", "flex-start", "flex-end", "center", "space-between", "space-around"]
};

class Flex extends Component {
    constructor(props) {
        super();
        this.state = {
            flexObj: '',
            ctrl: [
                {
                    data: 10,
                    info: "条目数量",
                    fun: this.onCountChanged.bind(this)
                },
                {
                    data: 1000,
                    info: "容器宽度",
                    fun: this.onBoxWidthChanged.bind(this)
                },
                {
                    data: 300,
                    info: "容器高度",
                    fun: this.onBoxHeightChanged.bind(this)

                },
                {
                    data: "auto",
                    info: "条目宽度",
                    fun: this.onItemWidthChanged.bind(this)
                },
                {
                    data: "auto",
                    info: "条目高度",
                    fun: this.onItemHeightChanged.bind(this)
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
                <div className="Flex" ref={"flex"}>
                    {this.formItem()}
                </div>
                <ListInfo data={this.state.flexObj}
                          onItemClick={this.onItemClick.bind(this)}/>
            </div>
        )
    }


    /**
     * 数量变化时的处理
     * @param count
     */
    onCountChanged(count) {
        let ctrl = this.state.ctrl;
        ctrl[0].data = count;
        this.setState({
            ctrl
        })
    }

    /**
     * flex盒子宽变化时处理
     * @param num
     */
    onBoxWidthChanged(num) {
        let ctrl = this.state.ctrl;
        ctrl[1].data = num;
        this.setState({
            ctrl
        });
        console.log(this.refs.flex.style.width);
        this.refs.flex.style.width = this.state.ctrl[1].data + "px";
    }

    /**
     * flex盒子高变化时处理
     * @param num
     */
    onBoxHeightChanged(num) {
        let ctrl = this.state.ctrl;
        ctrl[2].data = num;
        this.setState({
            ctrl
        });
        this.refs.flex.style.height = this.state.ctrl[2].data + "px";
    }

    /**
     * item宽变化时处理
     * @param num
     */
    onItemWidthChanged(num) {
        let ctrl = this.state.ctrl;
        ctrl[3].data = num;
        this.setState({
            ctrl
        });

        for (let i = 0; i < this.state.ctrl[0].data; i++) {
            this.refs["title" + i].style.width = this.state.ctrl[3].data + "px";
        }
    }

    /**
     * item高变化时处理
     * @param num
     */
    onItemHeightChanged(num) {
        let ctrl = this.state.ctrl;
        ctrl[4].data = num;
        this.setState({
            ctrl
        });
        for (let i = 0; i < this.state.ctrl[0].data; i++) {
            this.refs["title" + i].style.height = this.state.ctrl[4].data + "px";
        }
    }

    /**
     * 点击下方条目
     * @param index
     */
    onItemClick(index) {
        let flexStyle = this.refs.flex.style;
        switch (index) {
            case 0:
                flexDirection.index++;
                flexStyle.flexDirection = flexDirection.data[flexDirection.index % flexDirection.data.length];
                break;
            case 1:
                flexWrap.index++;
                flexStyle.flexWrap = flexWrap.data[flexWrap.index % flexWrap.data.length];
                break;
            case 2:
                justifyContent.index++;
                flexStyle.justifyContent = justifyContent.data[justifyContent.index % justifyContent.data.length];
                break;
            case 3:
                alignItems.index++;
                flexStyle.alignItems = alignItems.data[alignItems.index % alignItems.data.length];
                break;
            case 4:
                alignContent.index++;
                flexStyle.alignContent = alignContent.data[alignContent.index % alignContent.data.length];
                break;
            default:
                break;
        }
        this.notifyChanged();
    }


    formItem() {
        let color = [];
        for (let i = 0; i < this.state.ctrl[0].data; i++) {
            color.push(Logic.randomRGB(.8))

        }
        return (
            color.map((item, index) => {
                return (
                    <div className={"title"} ref={"title" + index} style={{backgroundColor: item}} key={index}>
                        Toly{index}
                    </div>
                );
            })
        )
    }

    componentDidMount() {
        this.notifyChanged();
    }


    notifyChanged() {
        let flex = this.refs.flex.style;
        let flexObj = {
            "flex-direction": flex.flexDirection === "" ? "row" : flex.flexDirection,//元素排列方向
            "flex-wrap": flex.flexWrap === "" ? "nowrap" : flex.flexWrap,//换行
            // "flex-flow": $Flex.css("flex-flow"),//换行+元素排列方向
            "justify-content": flex.justifyContent === "" ? "normal" : flex.justifyContent,//水平对齐方式
            "align-items": flex.alignItems === "" ? "normal" : flex.alignItems,//垂直对齐方式
            "align-content": flex.alignContent === "" ? "normal" : flex.alignContent,//多行垂直对齐方式,
        };
        this.setState({
            flexObj: flexObj
        });
    }
}

export default Flex;