import React, { Component } from 'react';
import style from './Article.styl';
import { Link } from 'react-router-dom';

class Article extends Component {
    render() {
        return (
            <article className={style.article}>
                <h1><a>{this.props.data.name}</a></h1>
                <div className={style['post-meta']}>
                    <span className={style.createAt}>发表于 {this.props.data.createAt}</span> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <span className={style.class}>分类于 {this.props.data.class}</span> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <span className={style.reading}>阅读数 {this.props.data.reading}次</span>
                </div>
                <p className={style.desc}>
                    {this.props.data.desc}
                </p>
                <Link to={`/article/${this.props.data.id}`} className={style.btn}>
                    阅读全文»
                </Link>
            </article>
        );
    }
}

export default Article;
