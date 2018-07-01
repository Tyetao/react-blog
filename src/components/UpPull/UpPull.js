import React, { Component } from 'react';
import style from './UpPull.styl';

class UpPull extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            isLoadingMore: true
        }
    }

    render() {
        return (
            <div className={style.loadMore} ref="wrapper">{!this.props.isLoadingMore ? '没有更多啦' : '加载更多...'}</div>
        );
    }

    componentDidMount() {
        this.refs.wrapper.style.display = 'none';
        regScroll(this.scrollFn.bind(this));
    }

    scrollFn() {
        // 滚动高度
        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
        // 页面高度
        const pageHeight = document.body.clientHeight;
        // 浏览器视口高度
        const viewportHeight = document.documentElement.clientHeight;
        // 底部剩余高度
        const bottomHeight = pageHeight - scrollHeight - viewportHeight;
        
        if (bottomHeight <= 40 && this.state.isLoadingMore) {
            this.refs.wrapper.style.display = 'block';
            this.setState((preState) => ({
                isLoadingMore: false,
                page: preState.page + 1
            }))
            this.props.cb(this.state.page);
        }
    }

    componentWillReceiveProps() {
        this.setState((preState, current) => ({
            isLoadingMore: current.isLoadingMore
        }))
    }

    componentWillUnmount() {
        window.onscroll = '';
    }
}

function regScroll(myHandler) {
    if (window.onscroll === null) {
        window.onscroll = myHandler
    } else if (typeof window.onscroll === 'function') {
        var oldHandler = window.onscroll;
        window.onscroll = function () {
            myHandler();
            oldHandler();
        }
    }
}

export default UpPull;
