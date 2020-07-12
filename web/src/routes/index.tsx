import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Market from '../pages/Market';
import Admin from '../pages/Admin';
import NewProduct from '../pages/NewProduct';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Market} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/newProduct" exact component={NewProduct} />
        </Switch>
    )
}

export default Routes;