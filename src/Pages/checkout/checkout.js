import React from 'react';
import HeaderItem from '../../Components/checkout-header-item';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selects';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import StripeButton from '../../Components/stipe-button';
import './checkout.scss';
import CheckoutItem from '../../Components/checkout-item';
const Checkout =({total,cartItems})=>{
    return(
        <div className="checkout-page">
            <div className="checkout-header">
               <HeaderItem name='Product'/>
               <HeaderItem name='Decription'/>
               <HeaderItem name='Quantity'/>
               <HeaderItem name='Price'/>
               <HeaderItem name='Remove'/>
            </div>
            {
                cartItems.map(item=><CheckoutItem cartItem={item}/>)
            }
    <div className="total">
        Total:{total}$
        </div>
        <StripeButton price={total}/>
        <div className="test-warning">
            *Please use the following test credit card for payments
            <br/>
           Number: 4242-4242-4242-4242
            <br/>
            EXP: 01/24 <br/>
            CVV:123
                  </div>
        </div>
    );
}

const mapStateToProps=createStructuredSelector({
cartItems:selectCartItems,
total:selectCartTotal
});

export default connect(mapStateToProps)(Checkout);