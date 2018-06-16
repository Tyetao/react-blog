import React from 'react';
import style from './TimeAxis.styl';
import { Link } from 'react-router-dom';
import { getArticleList } from 'api';
import UpPull from 'components/UpPull/UpPull';

export default class TimeAxis extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = ({
            isLoadingMore: true,
            page: 0,
            data: [],
            timeLineData: []
        });
    }
    render() {

        let listMap = this.state.timeLineData.map((item, index) => {
            return (
                <div key={index}>
                    <h2 className={style['archive-year']}><i className="iconfont icon-clock_fill"></i>{item.year}</h2>
                    {
                        item.children.map((item2, index2) => {
                            return (
                                <Link key={index2} to={`/article/${item2.id}`}>
                                    <div className={`${style.post} ${style['post-type-normal']}`}>
                                        <header className={style['post-header']}>
                                            <time className={style['post-time']}>
                                                {this.timestampToTime(item2.createAt)}
                                            </time>
                                            <span>{item2.name}</span>
                                        </header>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            )
        })

        return (
            <div className={style.archives}>
                <section id="posts" className={style['posts-collapse']}>
                    {
                        listMap
                    }
                </section>
                <UpPull cb={this.loadMoreDataFn.bind(this)} isLoadingMore={this.state.isLoadingMore} />
            </div>
        )
    }


    componentDidMount() {
        this.loadMoreDataFn(0)
    }

    // 加载数据
    loadMoreDataFn(page) {
        getArticleList({
            params: {
                _start: page * 5,
                _limit: 5,
                _sort:'createAt',
                _order:'DESC'
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
            this.calcData();
        }).catch(err =>
            console.log(err)
        )
    }

    calcData() {
        let _this = this;
        let array = [];
        // 返回年份
        let year = this.state.data.map((item) => {
            if (typeof item.createAt === 'number') {
                item.createAt = this.timestampToTime(item.createAt)
            }
            return parseInt(item.createAt.substr(0, 4));
        });

        // 去重
        function unique2(year) {
            let tmpArr = [];
            for (let i = 0; i < year.length; i++) {
                if (year.indexOf(year[i]) == i) {
                    tmpArr.push(year[i]);
                }
            }
            return tmpArr;
        }

        // 往数组添加年份和children
        unique2(year).forEach((item1) => {
            array.push({
                year: item1,
                children: []
            });
        })

        // 根据json里的某字段进行升序
        function compare(property) {
            return function (a, b) {
                var value1 = a[property];
                var value2 = b[property];
                return value1 - value2;
            }
        }

        // 判断与年份是否相同如果相同往children添加一条数据
        array.forEach((item1) => {
            _this.state.data.forEach((item2) => {
                if (item1.year === parseInt(item2.createAt.substr(0, 4))) {
                    item1.children.push(item2);
                }
            })
        })

        // 数组的children升序
        array.forEach((item1) => {
            item1.children.forEach((item2) => {
                let date = new Date(item2.createAt);
                item2.createAt = date.getTime()
            })
            item1.children.sort(compare('createAt'))
        })

        this.setState({
            timeLineData: array
        })
    }

    // 事件格式化
    timestampToTime(timestamp) {
        var date = new Date(timestamp);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y + M + D + h + m + s;
    }
}
