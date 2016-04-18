import React from 'react';
import AppStore from  '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import { Link } from 'react-router';

const CartSummary = ( props ) => {
  return (
    <li>
      <Link to="/cart">
        { `Cart Items: ${props.qty} / $${props.total}` }
      </Link>
    </li>
  );
}

export default StoreWatchMixin( CartSummary, AppStore.getCartTotals);
