import React from 'react';
import TweetList from '../TweetsWall/TweetList';
import { tweets } from '../../tweets'; 
import Header from './Header';
import TweetInput from '../TweetInput/TweetInput';

const Wall = () => {
  return (
      <div>
        <Header/>     
        <TweetInput/>
        <TweetList tweets = {tweets}/>          
      </div>
  );
}

export default Wall;

