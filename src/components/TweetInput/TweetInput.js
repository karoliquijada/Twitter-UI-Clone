import React from 'react';
import TweetButton from '../TweetButton/TweetButton';

const TweetInput = ({id, name, username, content }) => {
  return (
      <div>
          <input type="text" placeholder="En que estas pensando"></input>
          <TweetButton/>
      </div>
  );
}

export default TweetInput;

