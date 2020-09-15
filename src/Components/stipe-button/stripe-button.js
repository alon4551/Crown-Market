import React from 'react';
import {connect } from 'react-redux';
import {resetCart} from '../../redux/cart/cart.actions';
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price,clearCart }) => {
    const priceForStripte = price * 100;
    const publishKey = 'pk_test_51HRBwPKid8VNyWWeKAsUioRVxFcwfbxCaXky5BiHho3Ny7iRMp941H6Wro9GUeIxq7ut0Hs6Rp87RFmKrh55fxk7000s8tANlX';
    const onToken = token => {
        console.log(token);
        alert("Payment Succssful");
        clearCart();
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWOM clothing Ldt."
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`your total is $$${price}`}
            amount={priceForStripte}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishKey}
        />
    )
}
const mapDispatchToProps=dispatch=>({
    clearCart:()=>dispatch(resetCart())
})
export default connect(null,mapDispatchToProps)(StripeButton);