import React from 'react';
import './input.scss';
const Input =({name,isGoogleSignIn,inverted,...info})=>{
return (<button className={`${inverted?'inverted':''} ${isGoogleSignIn?'google-sign-in':''} custom-button`} {...info}> 
{name}
</button>);
}
export default Input;
