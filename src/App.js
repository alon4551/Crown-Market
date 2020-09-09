import React, { Component } from 'react';
import Homepage from './Pages/homepage';
import Shop from './Pages/Shop';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/Header';
import Signin from './Pages/Signin';
import {auth} from './firebase/firebase';
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
    this.unSubscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
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
        <Route exact path ='/signin' component={Signin}/>
      </Switch>
    </div>
  );
  }
}

export default App;
