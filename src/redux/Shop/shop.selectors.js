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

export const selectShopForPreview=createSelector(
    [selectShop],
    data=>Object.keys(data).map(key => ({
        ...data[key]
    }))
)

export const selectShopItems=createSelector(
    [selectShop],
    (data)=>data?Object.keys(data).map(key=>data[key].items):[]
)
export const selectShopPreview=createSelector(
    [selectShop],
    (data)=>data? Object.keys(data).map(key => ({
        ...data[key],
        items:data[key].items.filter((i,ind)=>ind<4)
    })):[]
)
export const selectCollectionItem=memoize((collectionUrl)=>createSelector(
    [selectShop],
    (collections)=>collections? collections[collectionUrl]:null
));