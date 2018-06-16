import React, { Component } from 'react';
import E from 'wangeditor';
import { Prompt } from 'react-router-dom';
import CommentList from 'components/CommentList/CommentList';
import style from './ArticleDetails.styl';
import { getArticleDetails } from 'api';

export default class ArticleDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            editorContent: ''
        }
        this.ListData = [
            {
                datetime: '今天11:20', username: 'Matt', content: '你好', avatar: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781615267,834481015&fm=27&gp=0.jpg", bedNum: 0, goodNum: 0, replyNum: 0,
                subComment: [
                    { datetime: '今天11:20', username: 'Matt2', content: '你好', avatar: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781615267,834481015&fm=27&gp=0.jpg", bedNum: 0, goodNum: 0, replyNum: 0 },
                ]
            },
            {
                datetime: '今天11:20', username: 'Matt', content: '你好', avatar: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781615267,834481015&fm=27&gp=0.jpg", bedNum: 0, goodNum: 0, replyNum: 0,
                subComment: [
                    { datetime: '今天11:20', username: 'Matt2', content: '你好', avatar: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781615267,834481015&fm=27&gp=0.jpg", bedNum: 0, goodNum: 0, replyNum: 0 },
                ]
            }
        ];
    }

    render() {
        let CommentMap = this.ListData.map((elm, i) => (<CommentList key={i} {...elm} />))

        return (
            <div className={`${style.ArticleDetails} fix`}>
                <h1 className={style.name}><a>{this.state.data.name}</a></h1>
                <div className={style.meta}>
                    <span className={style.createAt}>发表于 {this.state.data.createAt}</span> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <span className={style.class}>分类于 {this.state.data.class}</span> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <span className={style.reading}>阅读数 {this.state.data.reading}次</span>
                </div>
                <div className={style.content} dangerouslySetInnerHTML={{ __html: this.state.data.content }}></div>
                <div className={style['comment-tip']}>
                    <h4>评论：</h4>
                </div>
                {CommentMap}

                <div className={style.line}></div>
                <div ref="editorElem"></div>
                <button className="btn60" onClick={this.clickHandle.bind(this)}>提交</button>
                <Prompt
                    when={true}
                    message={() => {
                        document.getElementById('catalog').style.display = 'none';
                    }}
                />
            </div>
        )
    }

    componentWillMount() {
        document.getElementById('catalog').style.display = 'block';
        this.loadMoreDataFn();
    }

    componentDidMount() {
        const elem = this.refs.editorElem;
        const editor = new E(elem);
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            this.setState({
                editorContent: html
            })
        }
        editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
        ];
        editor.create();
        document.querySelector('.w-e-text').setAttribute('placeholder', '欢迎吐槽...');
        document.querySelector('.w-e-text p').remove();
    }

    loadMoreDataFn() {
        getArticleDetails(this.props.match.params.articleId).then(res => {
            this.setState({
                data: this.state.data = res
            })
        }).catch(err =>
            console.log(err)
        )
    }


    clickHandle() {
        alert(this.state.editorContent)
    }

    handleGood() {
        alert('good');
    }

    handleBad() {
        alert('Bad');
    }

    handleReply() {
        alert('Reply');
    }
}
