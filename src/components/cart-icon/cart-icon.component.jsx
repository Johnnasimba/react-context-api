import React, { useContext } from 'react';

import {CartContext} from '../../provider/cart/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const {toggleHidden, CartItemsCount} = useContext(CartContext);
  return (
  <div className='cart-icon' onClick={toggleHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{CartItemsCount}</span>
  </div>
)};




export default CartIcon;
