import React from 'react';
import './field.scss';
const Field =({type,name,action})=>{
return (<div className="group">
    <input name={name}  className="form-input" onChange={action} type={type}></input>
    <label className="form-input-label">{name}</label>
</div>);
}
export default Field;
