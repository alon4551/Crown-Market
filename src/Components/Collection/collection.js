import React from 'react';
import './collection.scss';
import Item from '../Collection_Item';
const Collection =({title,items})=>{
    return(<div className="collection-preview">
        <h1 className="title"> {title}</h1>
        <div className="preview">
        {items.filter((item,idx)=>idx<4)
        .map(({...info})=><Item {...info}></Item>)}
        </div>
    </div>)
};
export default Collection;