import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Market from '../pages/Market';
import Admin from '../pages/Admin';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Market} />
            <Route path="/admin" exact component={Admin} />
        </Switch>
    )
}

export default Routes;