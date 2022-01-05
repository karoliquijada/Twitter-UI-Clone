import React from 'react';
import Tweet from './Tweet'

const TweetList = ({ tweets }) => { 
        const tweetList = tweets.map((user,i) => {
            return (
                <Tweet
                    key = {i} 
                    name={tweets[i].name} 
                    username={tweets[i].username} 
                    content={tweets[i].content}
                /> 
            );
        });
    
        return (
            <div className="tweet-list">
                {tweetList}
            </div>
        );
    
}

export default TweetList;