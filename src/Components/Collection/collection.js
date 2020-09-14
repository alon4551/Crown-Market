import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionItem } from '../../redux/Shop/shop.selectors';
import Item from '../Collection_Item';
import './collection.scss';
const CollectionPage = ({ collection }) => {
    if(!collection)
    return (<div> 404 not found</div>)
    const {title,items}=collection;
    return (<div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                   items.map(item=><Item key={item.id} item={item}/>)
                }
            </div>
    </div>);
};
const mapStateToProps = (state,ownProps)=>({
    collection:selectCollectionItem(ownProps.match.params.collectionId)(state)
}); 

export default connect(mapStateToProps)(CollectionPage);