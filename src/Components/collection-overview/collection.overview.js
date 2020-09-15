import React from 'react';
import CollectionPreview from '../../Components/CollectionPreview';
import {selectShopPreview} from '../../redux/Shop/shop.selectors';
import {createStructuredSelector}from 'reselect';
import Spiner from '../with-spiner';

import {connect} from 'react-redux';

const Overview=({collections})=>{
    if(collections.length===0)
    return <Spiner/>
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