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