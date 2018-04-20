import React, { Component } from 'react';
import axios from 'axios';

import Product from '../../components/Product/Product';
import SelectedProduct from '../../components/SelectedProduct/SelectedProduct';
import SelectionButtons from '../../components/Navigation/Sidebar/SelectionButtons/SelectionButtons';
import './Store.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Store extends Component {
  state = {
    products: [],
    category: "all",
    allCategories: ["all"],
    searchValue: ""
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

  searchValueHandler = (event) => {
    const newValue = event.target.value;
    this.setState({searchValue: newValue});

  }

  selectButtonHandler = (param) => {
    this.setState({category: param});
  };


  render() { // If category "all" is selected, render all products, else render conditionally, based on selection
    let products = "";
    if (this.state.category === "all") {
      products = this.state.products.map(product => {
        if (product.name.toLowerCase().includes(this.state.searchValue)) {
        return <Product 
        key={product.id}
        name={product.name}
        price={product.price}
        brand={product.brand}
        img={product.img} />
    } else return null
  
  })} else {
      products = this.state.products.map(product => {
      if (product.category === this.state.category
      && product.name.toLowerCase().includes(this.state.searchValue)
      ) {
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
      <div>
        <Toolbar changed={this.searchValueHandler}/>
        <div className="Sidebar">
          <SelectionButtons 
          categories={this.state.allCategories}
          selectButtonHandler={this.selectButtonHandler} />
        </div>
        <div className="Selection">
          {products}
        </div>
        <SelectedProduct />
      </div>
    );
  }
}

export default Store;