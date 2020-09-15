import React,{Component} from 'react';
import Field from '../../Components/FormField';
import Input from '../../Components/FormInput';
import {auth,signInWithGoogle} from '../../firebase/firebase';
import './signin.scss';
class Signin extends Component{
    constructor(){
        super();
        this.state=this.initState
    }
    initState={
        email:'',
            password:''
    }
    handleSubmit=async event=>
    {
        const {email,password}=this.state;
        event.preventDefault();
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState(this.initState);
        }
        catch(error){
            console.log("faild to log in",error.message);
        }
    }
    onChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
        
    }
    render(){
        const {email,password}=this.state;
        const {onChange,handleSubmit}=this;
        return<div className="signin">
            <h2 className="title">I allready have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            <Field type="email" name="email" value={email} action={onChange}/>
            <Field type="password" name="password" value={password} action={onChange}/>
            <div className="buttons">

            <Input type="submit" name="Sign in"/>
            <Input type="reset" onClick={signInWithGoogle} isGoogleSignIn name="Sign With Google"/>
            </div>
            </form>
        </div>;
    }
}
/*
  s
    
*/
export default Signin;