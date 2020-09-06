import React from 'react';
import Homepage from './Pages/homepage';
import Shop from './Pages/Shop';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path ='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
