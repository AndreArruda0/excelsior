import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Market from '../pages/Market';
import Admin from '../pages/Admin';
import NewProduct from '../pages/NewProduct';
import EditProduct from '../pages/EditProduct';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Market} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/newProduct" exact component={NewProduct} />
            <Route path="/editProduct/:ID" exact component={EditProduct} />
        </Switch>
    )
}

export default Routes;