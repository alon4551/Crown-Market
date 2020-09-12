import React from 'react';
import Input from '../FormInput';
import {connect} from 'react-redux';
import CartItem from '../cart-item';
import { selectCartItems} from '../../redux/cart/cart.selects';
import './cart-dropdown.scss';

const Cart =({cartItems})=>(<div className="cart-dropdown">
<div className="cart-items">
{
    cartItems.map(item=><CartItem key={item.id} item={item}/>)
}
</div>
<Input name="GO TO CHECKOUT" type="button"/> 
</div>);
const mapStateToProps=state=>({
    cartItems:selectCartItems(state)
})
export default connect(mapStateToProps,null)(Cart);