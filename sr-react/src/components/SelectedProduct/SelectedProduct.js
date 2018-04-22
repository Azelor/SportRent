import React, {Component} from 'react';
import axios from 'axios';

import './SelectedProduct.css'

class SelectedProduct extends Component {
  state = {product: []}
  componentDidMount() {
    axios.get('/products'+this.props.location.pathname)
    .then(response => {
      this.setState({product: response.data});
    })};

  render() {
    return (
      <div className="SelectedProduct">
        <div className="SelectedProductImage"><img src={this.state.product.img} alt="ski" width="300"/></div>
        
        <div className="SelectedProductDescription">
          <div className="SelectedProductName">{this.state.product.name}</div>
          <div className="SelectedProductPrice">{"€"+this.state.product.price}</div>
          <p>Product description:</p>
          <p>{this.state.product.description}</p>
        </div>
      </div>
    )
  }
}

export default SelectedProduct;
