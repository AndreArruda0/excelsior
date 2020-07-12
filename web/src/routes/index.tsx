import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Market from '../pages/Market';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Market} />
        </Switch>
    )
}

export default Routes;