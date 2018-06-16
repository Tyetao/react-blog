import React, { Component } from 'react';
import Article from 'components/Article/Article';
import UpPull from 'components/UpPull/UpPull';
import { getArticleList, getClassifyArticle } from 'api';
import style from './Home.styl';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingMore: true,
            page: 0,
            data: []
        };
    }

    render() {
        return (
            <div className={style.content}>
                {this.state.data.map((item, index) => (
                    <Article key={index} data={item} />
                ))}
                <UpPull cb={this.loadMoreDataFn.bind(this)} isLoadingMore={this.state.isLoadingMore} />
            </div>
        )
    }

    componentDidMount() {
        this.loadMoreDataFn(this.state.page)
    }


    // 加载数据
    loadMoreDataFn(page) {
        let path = this.props.match.path;
        let api = '';
        path === '/' ? api = getArticleList : api = getClassifyArticle;

        api({
            params: {
                _start: page * 5,
                _limit: 5
            }
        }).then(res => {
            if (res && res.length <= 0) {
                this.setState({
                    isLoadingMore: false
                })
                return;
            }
            this.setState({
                data: this.state.data.concat(res)
            })
        }).catch(err =>
            console.log(err)
        )
    }
}
