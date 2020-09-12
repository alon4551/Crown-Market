import  {createSelector} from 'reselect';

const selectCart =state=>state.cart;

export const selectCartItems=createSelector(
    [selectCart],
    (cart)=> cart.cartItems
);

export const selectHidden=createSelector(
    [selectCart],
    (cart)=>cart.hidden
)
export const selectCartTotal=createSelector(
    [selectCartItems],
    (cart)=>cart.reduce((acc,item)=>acc+item.quantity*item.price,0)
);
export const selectCartItemsCount=createSelector(
    [selectCartItems],
    (items)=>items.reduce((acc,item)=>acc+item.quantity,0)
)