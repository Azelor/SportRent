import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import './Cart.css';
import CartItem from './CartItem/CartItem';

class Cart extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    let cartVisibility = "CartContainerHidden";
    if (this.props.cartOpen) {
      cartVisibility = "CartContainer"
    }
    let cart = this.props.cart.map(item => {
      return <CartItem
      name={item.name}
      price={item.price}
      img={item.img} />
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