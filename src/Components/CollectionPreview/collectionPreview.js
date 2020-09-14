import React from 'react';
import './collection.scss';
import Item from '../Collection_Item';

const CollectionPreview =({title,items,preview})=>{
    return(<div className="collection-preview">
        <h1 className="title"> {title}</h1>
        <div className="preview">
        {
        items.map((item)=><Item  key={item.id} item={item}></Item>)
        }
        </div>
    </div>)
};

export default CollectionPreview;