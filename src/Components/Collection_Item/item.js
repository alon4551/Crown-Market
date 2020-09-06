import React from 'react';
import './item.scss';
const Item =({name,imageUrl,price,id})=>{
    console.log(imageUrl);
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
    </div>)
};
export default Item;