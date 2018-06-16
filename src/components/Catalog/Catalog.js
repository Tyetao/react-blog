import React, { Component } from 'react';
import style from './Catalog.styl';
class Catalog extends Component {

    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView(); }
        }
    }

    render() {
        return (
            <div ref="catalog" className={style.catalog}>
                <ul>
                    <li>
                        <a onClick={() => this.scrollToAnchor('aa')}>88888</a>
                        <ul>
                            <li>二天内不</li>
                            <li>二天内不</li>
                        </ul>
                    </li>
                    <li>二天内不</li>
                </ul>
            </div>
        );
    }
    componentDidMount() {
        let that = this;
        window.onscroll = function () {
            let t = (document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop) + 320;
            that.refs.catalog.style.top = t + 'px';
        }
    }

}

export default Catalog;
