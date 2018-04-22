import React from 'react';

import './Toolbar.css';

const toolbar = (props) => {
  return (
    <div className="Toolbar">
  <img src="/assets/images/sport-rent.png" alt="logo" height="55px"/>
  <input
  type="text"
  onChange={props.changed}
  searchvalue={props.searchValue}
  />
  <div>cart</div>
  </div>
  )}

export default toolbar;