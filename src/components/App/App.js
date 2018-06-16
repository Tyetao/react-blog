import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import getRouter from 'router/router';

import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import BlogInfo from 'components/BlogInfo/BlogInfo';
import Catalog from 'components/Catalog/Catalog';
import style from './App.styl';
export default class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            showLaserBeam: false
        };
    }

    render() {
        return (
            <Route
                render={({ location }) => (
                    <div>
                        <div className={style['line-top']}></div>
                        <div className={style.main}>
                            <div id="catalog" className={style['main-left']}>
                                <Catalog />
                            </div>
                            <div className={style['main-center']}>
                                {getRouter(location)}
                            </div>
                            <div className={style['main-right']}>
                                <Logo />
                                <Nav />
                                <BlogInfo />
                            </div>
                        </div>
                    </div>
                )}
            />
        )
    }
}
