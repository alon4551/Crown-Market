export const addItemToCart=(cartItems,addItem)=>{
    const exsistCartItem=cartItems.find(item=>item.id===addItem.id);
    if(exsistCartItem){
        return cartItems.map(item=>item.id===addItem.id
            ?
            {...item,quantity:item.quantity+1}
            :item
            )
    }
    return[...cartItems,{...addItem,quantity:1}];
}
export const removeItem=(cartItems,Item)=>{
    const exsistingItem=cartItems.find(item=>item.id===Item.id);
    if(exsistingItem.quantity===1)
        return cartItems.filter(item=>item.id!==Item.id);
    else
        return cartItems.map((item)=>
        item.id===Item.id?
            {...item,
                quantity:item.quantity-1}
            :
            item)
}
export const clearItem=(cartItems,removeItem)=>{
   return cartItems.filter(item=>item.id!==removeItem.id)
}