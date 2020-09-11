import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import Icon from '../cartIcon';
import Cart from '../cart-dropdown';
import {auth} from '../../firebase/firebase';
import {connect} from 'react-redux';

import './Header.scss';
const Header=({currentUser,hidden})=>{

    return (<div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
          {
            currentUser?
            <div className="option" onClick={()=>auth.signOut()}>SignOut</div>
            :
            <Link className="option" to='/signin'>
            Sign in
          </Link>
          }
      
        <Link className="option" to='/shop'>
            SHOP
        </Link>
        <Link className="option" to='/shop'>
          CONTANT
        </Link>
        <Icon/>
        </div>
        {hidden?null:<Cart/>}
          
    </div>);
};

const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
  currentUser,hidden
  })
export default  connect(mapStateToProps)(Header);