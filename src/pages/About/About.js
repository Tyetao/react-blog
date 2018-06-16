import React, { Component } from 'react';
import style from './about.styl';
export default class Counter extends Component {
    render() {
        return (
            <div className={style.about}>
                <h1>前端工程师（H5工程师）</h1>
                <p>目前工作在深圳，深圳的小伙伴可以随时来约 :)</p>
                <p>专注于前端开发（Nodejs/Angular/Vue），全栈发展 :)</p>

                <div>
                    <h1 className={style.contact}>联系方式</h1>
                    <span className={style.emile}>邮箱：765068439@qq.com</span>
                    <span className={style.qq}>QQ：765068439</span>
                    <span className={style.qq}>微信：765068439</span>
                </div>

                <h1 className={style.info}>给我留言</h1>
                <textarea  className={style.textarea} placeholder="欢迎留言..."></textarea>
                <button className={style.btn}>保存留言</button>
            </div>
        )
    }
}


