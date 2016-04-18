import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import AppActions from '../../actions/app-actions'
import CartButton from '../cart/app-cart-button';
import { Link } from 'react-router';

function getCatalogItem(props){
  let item = AppStore.getCatalog().find( ({id}) => id === props.params.item )
  return {item};
}

const CatalogDetail = (props) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12">
      <h4>{props.item.title}</h4>
      <img src="http://placehold.it/250x250" width="100%" className="img-responsive" />
      <p>{props.item.description}</p>
      <p>
        ${props.item.cost}
        <span className="text-success">{props.item.qty && `(${props.item.qty} in cart)`}</span>
      </p>
      <div className="btn-group">
        <Link to="/" className="btn btn-default btn-sm">Continue Shopping</Link>
        <CartButton
          txt="Add to Cart"
          handler={
            AppActions.addItem.bind(null, props.item)
          }
          />
      </div>
    </div>
  )
}

export default StoreWatchMixin(CatalogDetail, getCatalogItem);
