import React from 'react';

import './Product.css';
import { NavLink } from 'react-router-dom';

const product = (props) => (
  <NavLink onClick={props.clicked} to={"/"+props.id}>
    <div className="Product">
      <img src={props.img} alt="ski" width="180"/>
      <div className="Name">{props.name}</div>
      <div className="Brand">{props.brand}</div>
      <div className="Price">{"€"+props.price}</div>
      <div className="Category">{props.category}</div>
      <div>{props.description}</div>
    </div>
  </NavLink>

)

export default product;