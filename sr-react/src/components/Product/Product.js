import React from 'react';

import './Product.css';

const product = (props) => (
  <div className="Product">
    <img src={props.img} alt="ski" width="180"/>
    <div className="Name">{props.name}</div>
    <div className="Brand">{props.brand}</div>
    <div className="Price">{"€"+props.price}</div>
    <div className="Category">{props.category}</div>
    <div>{props.description}</div>
  </div>
)

export default product;