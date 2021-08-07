import React from 'react';
import NavBar from './NavBar';
import Logo from '../Logo/Logo';
import TweetButton from '../TweetButton/TweetButton';

const SideBar = () => {
  return (
    <div className="sidebar fc">
      <Logo/> 
      <NavBar/>    
      <TweetButton/>
    </div>    
  );
}

export default SideBar;
