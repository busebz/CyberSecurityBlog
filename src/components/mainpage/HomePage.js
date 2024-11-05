import React from 'react';
import MainContainer from '../MainContainer';
import RightBar from '../RightBar';
import classes from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={classes.content}>
      <MainContainer />
      <RightBar />
    </div>
  );
};

export default HomePage;


