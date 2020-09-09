import React,{Component} from 'react';
import Field from '../../Components/FormField';
import Input from '../../Components/FormInput';
import {signInWithGoogle} from '../../firebase/firebase';
import './signin.scss';
class Signin extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=event=>
    {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            email:'',
        password:''});

    }
    onChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
        
    }
    render(){
        const {onChange,handleSubmit}=this;
        return<div className="signin">
            <h2 className="title">I allready have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            <Field type="email" name="Email"  action={onChange}/>
            <Field type="password" name="Password" action={onChange}/>
            <div className="buttons">

            <Input type="submit" name="Sign in"/>
            <Input onClick={signInWithGoogle} isGoogleSignIn name="Sign With Google"/>
            </div>
            </form>
        </div>;
    }
}
/*
  s
    
*/
export default Signin;