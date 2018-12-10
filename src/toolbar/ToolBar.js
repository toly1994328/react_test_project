import React, {Component} from 'react';
import './ToolBar.scss'
import '../static/icon/iconfont.scss'
import {Link} from 'react-router-dom'


const toolBar = (WrappedComponent) => class ToolBar extends Component {

    render() {
        return (
            <div className={"pager-container"}>
                <div className="pager-content">
                    <WrappedComponent/>
                </div>

                <div className={"ToolBar"}>
                    <div className="toolbar-content">
                        {this.renderItem(toolbarArr)}
                    </div>
                </div>
            </div>
        );
    }

    renderItem(arr) {
        return (
            arr.map((v, i) => (
                <Link key={i} to={v.link}
                      className={`toolbar-item ${window.location.href.indexOf(v.link) > -1 ? 'active' : ''}`}>
                    <div className={`iconfont ${v.img}`}></div>
                    <div className="toolbar-info">{v.text}</div>
                </Link>)
            )
        )
    }


};


const toolbarArr = [
    {
        img: 'icon-shouye',
        text: '首页',
        link: '/home'
    },
    {
        img: 'icon-fenlei-active',
        text: '分类',
        link: '/category'
    },
    {
        img: 'icon-daohanggouwuche',
        text: '购物车',
        link: '/car'
    },
    {
        img: 'icon-yonghu',
        text: '用户',
        link: '/user'
    },
];


export default toolBar;