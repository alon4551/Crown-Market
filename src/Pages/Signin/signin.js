import React,{Component} from 'react';
import Field from '../../Components/FormField';
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
        return<div>
            <h2>I allready have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            <Field type="email" name="Email"  action={onChange}/>
            <Field type="password" name="Password" action={onChange}/>
            <input type="submit" value="submit form"/>
            </form>
        </div>;
    }
}
/*
  s
    
*/
export default Signin;