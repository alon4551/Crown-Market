import {createSelector} from 'reselect';
import memoize from 'lodash.memoize'

const COLLECTION_ID_MAP={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}
const selectShop=state=>state.shop;
export const selectShopData=createSelector(
    [selectShop],
    (shop)=>shop.data
)

export const selectShopItems=createSelector(
    [selectShopData],
    (data)=>data.map((section)=>section.items)
)
export const selectShopPreview=createSelector(
    [selectShopData],
    (data)=>data.map((item)=>({
        ...item,
        items:item.items.filter((item,ind)=>ind<4)
    }),[])
)
export const selectCollectionItem=memoize((collectionUrl)=>createSelector(
    [selectShopData],
    (collections)=>collections.find(
        (collection)=>
            collection.id===COLLECTION_ID_MAP[collectionUrl])
));