import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selects';

import './cartIcon.scss';
const cartIcon =({toggleCartHidden,itemCount})=>{
return(<div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
<span className="item-count">{
    itemCount
}</span>
</div>);
}

const mapStateToProps=(state)=>({
    
    itemCount:selectCartItemsCount(state)
})
const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(cartIcon);