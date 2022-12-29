import React from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import { useQuery } from './lib/wundergraph';

function Feed () {
  const getTweets = useQuery({
    operationName: 'GetTweets',
    liveQuery: true,
    requiresAuthentication: true
  });

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      <TweetBox/>
      {getTweets.data?.tweets_findManytweets?.map((tweet) => (
        <Post
          displayName={tweet.displayName}
          username={tweet.username}
          verified={tweet.verified}
          text={tweet.text}
          avatar={tweet.avatar}
          image={tweet.image}
          key={tweet.id}
        />
      ))}
    </div>
  );
}

export default Feed;
