import React from 'react';
import TweetButton from '../TweetButton/TweetButton';

const TweetInput = ({id, name, username, content }) => {
  return (
      <div className="tweet-input flex">
          <div><p className="tweet-img"></p></div>          
          
          <div className="tweet-right"> 
            <textarea className="input-box" maxlength="240" type="text" placeholder="What's happening?"></textarea>
            <div><p className="ecr">Everyone can reply</p></div>
            
            <div className="icons-button">
              <div className="flex">              
                <div className="tweet-icon">
                  <svg viewBox="0 0 24 24" ><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
                </div>
                <div className="tweet-icon">
                <svg viewBox="0 0 24 24" ><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
                </div>
                <div className="tweet-icon">
                  <svg viewBox="0 0 24 24" ><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
                </div>
                <div className="tweet-icon">
                  <svg viewBox="0 0 24 24" ><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
                </div>
              </div>
              <button className="btweet2" type="submit">Tweet</button>
            </div>        
          </div>
       
      </div>
  );
}

export default TweetInput;

