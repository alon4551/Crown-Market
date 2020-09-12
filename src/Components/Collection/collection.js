import React from 'react';
import './collection.scss';
import Item from '../Collection_Item';
const Collection =({title,items})=>{
    return(<div className="collection-preview">
        <h1 className="title"> {title}</h1>
        <div className="preview">
        {items.filter((item,idx)=>idx<4)
        .map((item)=><Item  key={item.id} item={item}></Item>)}
        </div>
    </div>)
};
export default Collection;