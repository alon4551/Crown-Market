import React, { Component } from 'react';
import Homepage from './Pages/homepage';
import Shop from './Pages/Shop';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/Header';
import Signin_Signup from './Pages/Signin_Signup';
import {auth,createUserProfile} from './firebase/firebase';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unSubscribeFromAuth=null;
  componentDidMount(){
    this.unSubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef= await createUserProfile(userAuth);
        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          },()=>console.log(this.state.currentUser))
          
        });
      }
      else
      this.setState({currentUser:userAuth});
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path ='/shop' component={Shop}/>
        <Route exact path ='/signin' component={Signin_Signup}/>
      </Switch>
    </div>
  );
  }
}

export default App;
