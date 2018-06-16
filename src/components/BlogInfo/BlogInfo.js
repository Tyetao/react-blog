import React, { Component } from 'react';
import style from './BlogInfo.styl';

class BlogInfo extends Component {
    render() {
        return (
            <div className={style.logo}>
                <img className={style['logo-img']} src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781615267,834481015&fm=27&gp=0.jpg" />
                <p className={style['blog-name']}>TYT</p>
                <p className={style['site-description']}>javascript | HTML5 | CSS3 | Node | React | Angular | Vue | MongoDB</p>
                <div className={style['sub-nav']}>
                    <a>
                        <div className={style.top}>64</div>
                        <div className={style.bom}>日志</div>
                    </a>
                    <a>
                        <div className={style.top}>8</div>
                        <div className={style.bom}>分类</div>
                    </a>
                    <a>
                        <div className={style.top}>100</div>
                        <div className={style.bom}>标签</div>
                    </a>
                </div>
                <div className={style.friend}>
                    <span className={style.github}>
                        <a target="_blank" href="https://github.com/Tyetao">
                            <i className="iconfont icon-github"></i>
                            Github
                        </a>
                    </span>
                    <span className={style.weibo}>
                        <a target="_blank" href="https://weibo.com/u/5666553637">
                            <i className="iconfont icon-wb"></i>
                            微博
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}

export default BlogInfo;
