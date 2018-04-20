import React, { Component } from 'react';
import axios from 'axios';

import Product from '../../components/Product/Product';
import SelectedProduct from '../../components/SelectedProduct/SelectedProduct';
import SelectionButtons from '../../components/Navigation/Sidebar/SelectionButtons/SelectionButtons';

class Store extends Component {
  state = {
    products: [],
    category: "all",
    allCategories: ["kek"]

  }

  componentDidMount() {
    axios.get('/products')
    .then(response => {
      // get unique values from array
      let uniqueCategories = ["all",...new Set(response.data.map(item => item.category))];
      this.setState({
        products: response.data,
        allCategories: uniqueCategories
      });
    })
  }

  selectButtonHandler = (param) => {
    this.setState({category: param});
  };


  render() { // If category "all" is selected, render all products, else render conditionally, based on selection
    let products = "";
    if (this.state.category === "all") {
      products = this.state.products.map(product => {
        return <Product 
        key={product.id}
        name={product.name}
        price={product.price}
        brand={product.brand}
        img={product.img} />
    })} else {
      products = this.state.products.map(product => {
      if (product.category === this.state.category) {
        return <Product 
        key={product.id}
        name={product.name}
        price={product.price}
        brand={product.brand}
        img={product.img} />
      } else {
        return null;
      }
    })};

    return (
      <div className="Store">
        <SelectionButtons 
        categories={this.state.allCategories}
        selectButtonHandler={this.selectButtonHandler} />
        {products}
        <SelectedProduct />
      </div>
    );
  }
}

export default Store;