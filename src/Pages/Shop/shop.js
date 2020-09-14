import React from 'react';
import {Route} from 'react-router-dom';
import Overview from '../../Components/collection-overview';
import CollectionPage from '../../Components/collection';
const Shop=({match})=>{
            return (<div>
                <div className="shop-page">
                    <Route exact path={`${match.path}`} component={Overview} />
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
                </div>
        </div>)
    }


export default Shop;