import React,{Component} from 'react';
import Field from '../../Components/FormField';
import Input from '../../Components/FormInput';
import './signup.scss';
import { auth, createUserProfile } from '../../firebase/firebase';
const initState={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:'' 
    
    
}
class Signup extends Component{
    constructor(){
        super();
        this.state=initState
    }
    handleSubmit=async event=>
    {
        const {email,password,confirmPassword,displayName}=this.state;
        event.preventDefault();
        console.log(this.state);
        if(password!==confirmPassword){
        alert('Password not identical');
        return;
        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfile(user,{displayName});
            this.setState(initState);
        }catch(error){
            console.log("Error sign up user",error.message);
        }
        

    }
    
    onChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }
    render(){
        const {displayName,password,email,confirmPassword}=this.state;
        const {onChange,handleSubmit}=this;
        return (<div className="signup">
            <h2>Sign up</h2>
            <span>Please fill this forms</span>
            <form onSubmit={handleSubmit}>
            <Field type="name" name="displayName" value={displayName} action={onChange} require/>
            <Field type="email" name="email" value={email} action={onChange} require/>
            <Field type="password" name="password"value={password} action={onChange} require/>
            <Field type="password" name="confirmPassword" value={confirmPassword} action={onChange} require/>
            <Input name="Register" type="submit"/>
            </form>
        </div>);
    }
}
export default Signup;