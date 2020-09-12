import  {createSelector} from 'reselect';

const selectCart =state=>state.cart;

export const selectCartItems=createSelector(
    [selectCart],
    (cart)=> cart.cartItems
);

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    (items)=>items.reduce((acc,item)=>acc+item.quantity,0)
)