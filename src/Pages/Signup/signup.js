import React,{Component} from 'react';
import Field from '../../Components/FormField';
class Signup extends Component{
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
        this.setState({
            email:'',
        password:''});

    }
    onChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }
    render(){
        const {email,password}=this.state;
        const {onChange,handleSubmit}=this;
        return (<div>
            <h2>I allready have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            <Field type="email" name="Email" value={email} action={onChange}/>
            <Field type="password" name="Password" value={email} action={onChange}/>
            <input type="submit" value="submit form"/>
            </form>
        </div>);
    }
}
export default Signup;