import {shopTypes} from './shop.types'
export const ShowPreview=()=>({
    type:shopTypes.GET_SHOP_PREVIEW
})
export const ShowSection =(rootname)=>({
    type:shopTypes.GET_SECTION,
    payload:rootname
})