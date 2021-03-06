import React, { Component } from 'react';
import Homepage from './Pages/homepage';
import Shop from './Pages/Shop';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './Components/Header';
import Signin_Signup from './Pages/Signin_Signup';
import {auth,createUserProfile} from './firebase/firebase';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector }from 'reselect';
import {connect} from 'react-redux';
import './App.css';
import checkout from './Pages/checkout/checkout';

class App extends Component {
  
  unSubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser,collectionArray}=this.props;
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
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage}/>
        <Route path ={`${process.env.PUBLIC_URL}/shop`} component={Shop}/>
        <Route exact path ={`${process.env.PUBLIC_URL}/signin`}
        render={()=>
          currentUser
          ?
          (<Redirect to={`${process.env.PUBLIC_URL}/`}/>)
          :
          <Signin_Signup/>
        }
        />
        <Route exact path ={`${process.env.PUBLIC_URL}/checkout`} component={checkout}/>
        
      </Switch>
    </div>
  );
  }
}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
})
const mapDispatchToProps=dispach=>({
  setCurrentUser:user=>dispach(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
