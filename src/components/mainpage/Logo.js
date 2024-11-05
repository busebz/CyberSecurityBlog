import React from 'react';
import logo from '../../cyberlogo.png'
import classes from './Logo.module.css'

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="Logo" />
      <p>CyberSecurity</p>
    </div>
  );
};

export default Logo;
