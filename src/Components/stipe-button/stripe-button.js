import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    const priceForStripte = price * 100;
    const publishKey = 'pk_test_51HRBwPKid8VNyWWeKAsUioRVxFcwfbxCaXky5BiHho3Ny7iRMp941H6Wro9GUeIxq7ut0Hs6Rp87RFmKrh55fxk7000s8tANlX';
    const onToken = token => {
        console.log(token);
        alert("Payment Succssful");
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

export default StripeButton;