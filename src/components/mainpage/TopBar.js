import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import classes from './TopBar.module.css'

const TopBar = () => {
  return (
    <header className={classes.topbar}>
      <Logo />
      <Navigation /> 
    </header>
  );
};

export default TopBar;
