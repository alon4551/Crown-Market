import React from 'react';
import Input from '../FormInput';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import './item.scss';
const Item =({item,addItem})=>{
    const {name,imageUrl,price,id}=item;
    return (
    <div key={id} className="collection-item">

    <div style={{
        backgroundImage:`url(${imageUrl})`
    }}
    className="image"
    />
    <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        
        </div> 
        <Input inverted onClick={()=>addItem(item)} name='ADD TO CART'/>   
    </div>)
};

const mapDispatchToProps =dispatch=>({
addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(Item);