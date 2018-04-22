import React from 'react';
import { NavLink } from 'react-router-dom';

import './Toolbar.css';

const toolbar = (props) => {
  return (
    <div className="Toolbar">
  <NavLink to="/" ><img src="/assets/images/sport-rent.png" alt="logo" height="55px"/></NavLink>
  <input
  //value={props.value}
  type="text"
  onChange={props.changed}
  searchvalue={props.searchValue}
  onKeyPress={props.search}
  />
  <div>cart</div>
  </div>
  )}

export default toolbar;