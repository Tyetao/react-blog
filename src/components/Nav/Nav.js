
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import style from './Nav.styl';

export default class Nav extends Component {
    render() {
        return (
            <ul className={style.nav}>
                <li><NavLink to="/" exact activeClassName={style.active}><i className={`iconfont icon-homepage_fill`}></i>首页</NavLink></li>
                <li><NavLink to="/classify" activeClassName={style.active}><i className={`iconfont icon-createtask_fill`}></i>分类</NavLink></li>
                <li><NavLink to="/about" activeClassName={style.active}><i className={`iconfont icon-people_fill`}></i>关于</NavLink></li>
                <li><NavLink to="/timeAxis" activeClassName={style.active}><i className={`iconfont icon-clock_fill`}></i>归档</NavLink></li>
                <li><NavLink to="/Seting" activeClassName={style.active}><i className={`iconfont icon-setup_fill`}></i>设置</NavLink></li>
            </ul>
        )
    }
}
