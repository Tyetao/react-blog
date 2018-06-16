import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

/* components */
import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

/* pages */
import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Classify from 'bundle-loader?lazy&name=Classify!pages/Classify/Classify';
import About from 'bundle-loader?lazy&name=About!pages/About/About';
import TimeAxis from 'bundle-loader?lazy&name=TimeAxis!pages/TimeAxis/TimeAxis';
import ArticleDetails from 'bundle-loader?lazy&name=ArticleDetails!pages/ArticleDetails/ArticleDetails';
import Seting from 'bundle-loader?lazy&name=Seting!pages/Seting/Seting';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component
                ? <Component {...props} />
                : <Loading />
        }
    </Bundle>
);

export default (location) => (
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={0}>
            <Switch location={location}>
                <Route exact path="/" component={createComponent(Home)} />
                <Route path="/Classify" component={createComponent(Classify)} />
                <Route path="/About" component={createComponent(About)} />
                <Route path="/timeAxis" component={createComponent(TimeAxis)} />
                <Route path="/Seting" component={createComponent(Seting)} />
                <Route path="/article/:articleId" component={createComponent(ArticleDetails)} />
                <Route path="/articlList/:classId" component={createComponent(Home)} />
                <Route component={createComponent(NotFound)} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>

);
