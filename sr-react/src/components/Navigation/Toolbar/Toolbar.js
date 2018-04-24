import React from 'react';
import { NavLink } from 'react-router-dom';

import './Toolbar.css';
import CartToggle from './CartToggle/CartToggle'

const toolbar = (props) => {
  return (
    <div className="Toolbar">
      <NavLink className="Logo" to="/" ><img src="/assets/images/sport-rent.png" alt="logo" height="55px"/></NavLink>
      <input
      placeholder="Search for products"
      className="SearchBar"
      type="text"
      onChange={props.changed}
      searchvalue={props.searchValue}
      onKeyPress={props.search}/>
      <CartToggle clicked={props.toggleCart} quantity={props.quantity} cartOpen={props.cartOpen}/>
    </div>
  )}

export default toolbar;