import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Template from './app-template';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';
import CatalogDetail from './product/app-catalogdetail';

export default () => {
  return (
    <Router>
      <Route path="/" component={Template}>
        <IndexRoute component={Catalog} />
        <Route path="cart" component={Cart} />
        <Route path="item/:item" component={CatalogDetail} />
      </Route>
    </Router>
  );
}
