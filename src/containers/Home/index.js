import React from 'react';
import { Route } from 'react-router';
import { ROUTES_NAMES } from '../../containers/App/constants';
import Dashboard from "../../containers/Dashboard";
import Categories from "../../containers/Categories";
import Tags from "../../containers/Tags";
import './style.less';

const Home = (props) => {
    return (
        <React.Fragment>
            <Route exact path={ROUTES_NAMES.DASHBOARD} component={Dashboard} />
            <Route exact path={ROUTES_NAMES.CATEGORIES} component={Categories} />
            <Route exact path={ROUTES_NAMES.TAGS} component={Tags} />
        </React.Fragment>
    );
}

export default Home;
