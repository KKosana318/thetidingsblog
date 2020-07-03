import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../../assets/tidings.PNG';

import './navbar.styles.scss';

const Navbar = props => {
  const pathName = props.location.pathname;
  return (
    <div className={ `navbar ${pathName === "/economics" || pathName === "/history" || pathName === "/" ? 'no-margin' : ''}` }>
      < Link className='logo-container' to='/' >
        <img className='logo' src={ Logo } alt="The Tidings Blog" />
        {/* <h1 className='title'> Economics & History Blog</h1> */ }
      </Link >
      <div className='options'>
        <Link className='option' to="/">
          Home
      </Link>
        <Link className='option' to="/economics">
          Economics
      </Link>
        <Link className='option' to="/history">
          History
      </Link>
        <Link className='option' to="/about">
          About
      </Link>
        <Link className='option' to="/workwithus">
          Work with us
      </Link>
        <Link className='option' to="/contactus">
          Contact us
      </Link>
      </div>
    </div >
  )
}


export default withRouter(Navbar);