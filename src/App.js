import React, { Component } from 'react';
import Homepage from './Pages/homepage';
import Shop from './Pages/Shop';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './Components/Header';
import Signin_Signup from './Pages/Signin_Signup';
import {auth,createUserProfile} from './firebase/firebase';
import {setCurrentUser} from './redux/user/user.actions';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  
  unSubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unSubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef= await createUserProfile(userAuth);
        userRef.onSnapshot(snapshot=>{
        setCurrentUser({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
          
        });
      }
      else
      setCurrentUser(userAuth);
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    const {currentUser}=this.props;
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path ='/shop' component={Shop}/>
        <Route exact path ='/signin' 
        render={()=>
          currentUser
          ?
          (<Redirect to="/"/>)
          :
          (<Signin_Signup/>)
        }
        />
        
      </Switch>
    </div>
  );
  }
}

const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})
const mapDispatchToProps=dispach=>({
  setCurrentUser:user=>dispach(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
