import {cartTypes} from './cart.types';

export const toggleCartHidden=()=>({
    type:cartTypes.TOGGLE_CART_HIDDEN
});
export  const addItem=item=>({
    type:cartTypes.ADD_ITEM,
    payload:item
})
export const removeItem=item=>({
    type:cartTypes.REDUCE_ITEM,
    payload:item
})
export const resetCart=()=>({
    type:cartTypes.RESET_CART
})
export const clearItemFromCart=item=>({
    type:cartTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})