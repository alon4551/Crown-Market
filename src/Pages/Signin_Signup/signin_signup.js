import {React,Component} from 'react';
import Signin from '../Signin';
import Signup from '../Signup';
class Signin_Signup extends Component{
    constructor(){
        super();
    }
    render(){
        return(<div>
            <Signin/>
        </div>)
    }
}
export default Signin_Signup;