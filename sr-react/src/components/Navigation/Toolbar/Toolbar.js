import React from 'react';
import { NavLink } from 'react-router-dom';

import './Toolbar.css';

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
    <div className="CartButton">
      <img src="/assets/images/cart.svg" alt="logo" height="40px"/>0
    </div>
    </div>
  )}

export default toolbar;