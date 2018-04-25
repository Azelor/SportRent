import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import './Cart.css';
import CartItem from './CartItem/CartItem';

class Cart extends Component {

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    
    let cartVisibility = "CartContainerHidden";
    if (this.props.cartOpen) {
      cartVisibility = "CartContainer"
    }
    let newCart = [];
    for (var key in this.props.cartItems) {
      newCart.push(this.props.cartItems[key][2])
    }

    let cart = newCart.map(item => {
      return <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      img={item.img}
      attributes={this.props.cartItems[item.id]}
      add={this.props.add} 
      remove={this.props.remove}
      />
    });
    
    return (
      <div className={cartVisibility}>
        <div className="CartArea">
          <div className="Cart">
            <Scrollbars>{cart}</Scrollbars>
            <div className="CheckoutButton"><button>PROCEED TO CHECKOUT</button></div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Cart;