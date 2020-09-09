import React from 'react';
import './input.scss';
const Input =({name,isGoogleSignIn,...info})=>{
return (<button className={`${isGoogleSignIn?'google-sign-in':''} custom-button`} {...info}> 
{name}
</button>);
}
export default Input;
