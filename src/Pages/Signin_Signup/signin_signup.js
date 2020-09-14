import React,{Component} from 'react';
import Signin from '../Signin';
import Signup from '../Signup';
import './signin_signup.scss';

class Signin_Signup extends Component{
    render(){
        return(<div className="sign-in-and-sign-up">
            <Signin />
            <Signup/>
        </div>);
    }
}
export default Signin_Signup;