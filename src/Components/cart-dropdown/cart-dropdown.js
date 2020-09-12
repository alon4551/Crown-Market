import React from 'react';
import Input from '../FormInput';
import {connect} from 'react-redux';
import CartItem from '../cart-item';
import {withRouter} from 'react-router-dom';
import { selectCartItems,selectHidden} from '../../redux/cart/cart.selects';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect';
import './cart-dropdown.scss';

const Cart =({cartItems,history,dispatch})=>(<div className="cart-dropdown">
<div className="cart-items">
{
    cartItems.length?
    cartItems.map(item=><CartItem key={item.id} item={item}/>)
    :
    <span className="empty-message">Your cart is empty</span>
}
</div>
<Input name="GO TO CHECKOUT" onClick={()=>{
    dispatch(toggleCartHidden());
    history.push('/checkout');
    }} type="button"/> 
</div>);
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    hidden:selectHidden
})

export default withRouter(connect(mapStateToProps)(Cart));