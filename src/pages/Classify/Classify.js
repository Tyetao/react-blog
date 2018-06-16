import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Classify.styl';
import { getClassify } from 'api';

export default class Classify extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div className={style.tags}>
                <h1 className={style.title}>分类</h1>
                <p className={style.desc}>目前共计分类{this.state.data.length}种</p>
                <ul>
                    {
                        this.state.data.map((item, index) => {
                            return <li  key={index}>
                                        <Link to={`/articlList/${item.id}`}>
                                            <span className={style.name}>{item.class}({item.count})</span>
                                        </Link>
                                    </li>
                        })
                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        this.loadMoreDataFn();
    }

    loadMoreDataFn() {
        getClassify().then(res => {
            this.setState({
                data: this.state.data.concat(res)
            })
        }).catch(err =>
            console.log(err)
        )
    }
}
