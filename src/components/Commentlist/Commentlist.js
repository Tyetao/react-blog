import React from 'react';

import style from './CommentList.styl';

export default class Commentlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {
                display: 'none'
            }
        };
    }

    render() {

        const {
            datetime,
            username,
            content,
            avatar,
            subComment,
            goodNum,
            bedNum,
            replyNum
        } = this.props;

        return (
            <div className={`${style.comments}`}>
                <div className={style.avatar}>
                    <a>
                        <img width="100%" src={avatar} />
                    </a>
                </div>
                <div className={style.comment}>
                    <span className={style.username}>{username}</span>
                    <p className={style.content}>{content}</p>
                    <div className={style.thumbUp}>
                        <span
                            className={style.good}
                            onClick={this
                                .handleGood
                                .bind(this)}>
                            <i className={`iconfont icon-good`}></i>{goodNum}赞成
                        </span>
                        <span
                            className={style.bed}
                            onClick={this
                                .handleBad
                                .bind(this)}>
                            <i className={`iconfont icon-bad`}></i>{bedNum}反对
                        </span>
                        <span
                            className={style.reply}
                            onMouseDown={this
                                .handleReply
                                .bind(this)}>
                            <i className={`iconfont icon-comments`}></i>{replyNum}回复
                        </span>
                        <span className={style.datetime}>{datetime}</span>
                    </div>
                    <div style={this.state.style} className={`${style.replyt} fix`}>
                        <div
                            ref={(input) => {
                                this.textInput = input;
                            }}
                            className={style.textarea}
                            contentEditable="true"
                            placeholder={`${username} 回复 ${username}2：`}
                            onBlur={this
                                .handleBlur
                                .bind(this)}></div>
                        <button
                            className="btn60"
                            onMouseDown={this
                                .handleSave
                                .bind(this)}>回复</button>
                    </div>
                    {subComment
                        ? subComment.map((item, i) => {
                            return <Commentlist key={i} {...item} />
                        })
                        : ''
                    }
                </div>
            </div>
        )
    }

    handleGood() {
        alert('good');
    }

    handleBad() {
        alert('Bad');
    }

    handleReply() {
        if (this.state.style.display === 'block') {
            this.setState({
                style: {
                    display: 'none'
                }
            })
        } else {
            this.setState({
                style: {
                    display: 'block'
                }
            })
        }
        setTimeout(() => {
            this
                .textInput
                .focus();
        }, 10)
    }

    handleBlur() {
        this.setState({
            style: {
                display: 'none'
            }
        })
    }

    handleSave(e) {
        if (this.textInput.innerText) {
            console.log(this.textInput.innerText)
        } else {
            e.preventDefault();
            console.log('回复内容不能为空');
        }
    }
}
