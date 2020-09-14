import React from 'react';
import CollectionPreview from '../../Components/CollectionPreview';
import {selectShopPreview} from '../../redux/Shop/shop.selectors';
import {createStructuredSelector}from 'reselect';
import {connect} from 'react-redux';

const Overview=({collections})=>{
    const list=collections.map(({id,...info})=><CollectionPreview key={id} {...info}/>);
    return (<div>
    {
        list    
        }
</div>);
}

const mapStateToProps=createStructuredSelector({
    collections:selectShopPreview
})
export default connect(mapStateToProps)(Overview);