import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import Icon from '../cartIcon';
import Cart from '../cart-dropdown';
import {auth} from '../../firebase/firebase';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectHidden} from '../../redux/cart/cart.selects';
import {selectCurrentUser} from  '../../redux/user/user.selectors';

import './Header.scss';
const Header=({currentUser,hidden})=>{

    return (<div className="header">
        <Link className="logo-container" to={`${process.env.PUBLIC_URL}/`}>
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
          {
            currentUser?
            <div className="option" onClick={()=>auth.signOut()}>SignOut</div>
            :
            <Link className="option" to={`${process.env.PUBLIC_URL}/signin`}>
            Sign in
          </Link>
          }
      
        <Link className="option" to={`${process.env.PUBLIC_URL}/shop`}>
            SHOP
        </Link>
        <Link className="option" to={`${process.env.PUBLIC_URL}/shop`}>
          CONTANT
        </Link>
        <Icon/>
        </div>
        {hidden?null:<Cart/>}
          
    </div>);
};

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectHidden
  })
export default  connect(mapStateToProps)(Header);