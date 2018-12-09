import React, {Component} from 'react';
import './ListInfo.scss'

class ListInfo extends Component {
    render() {
        return (
            <div className="ListInfo" >
                {this.formList(this.props.data)}
            </div>
        )
    }

    formList(data) {
        let datas = [];
        let flexObj = {
            "flex-direction": "row",//元素排列方向
            "flex-wrap": "nowrap",//换行
            // "flex-flow": $Flex.css("flex-flow"),//换行+元素排列方向
            "justify-content": "normal",//水平对齐方式
            "align-items": "normal",//垂直对齐方式
            "align-content": "normal",//多行垂直对齐方式
        };
        data = data["flex-direction"] === "" ? flexObj : data;
        for (let key in data) {
            datas.push({
                    name: key,
                    data: data[key]
                }
            );
        }

        return (
            <div id="list-container">
                {datas.map((item, index) => {
                    return (

                        <div key={index} className="card" onClick={() => {
                            this.props.onItemClick && this.props.onItemClick(index);
                        }}>
                            {item.name}:<br/>
                            {item.data}<br/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ListInfo;