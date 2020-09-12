import React from 'react';
import HeaderItem from '../../Components/checkout-header-item';
import CheckouIttem from '../../Components/checkout-item';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selects';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
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
        </div>
    );
}

const mapStateToProps=createStructuredSelector({
cartItems:selectCartItems,
total:selectCartTotal
});

export default connect(mapStateToProps)(Checkout);