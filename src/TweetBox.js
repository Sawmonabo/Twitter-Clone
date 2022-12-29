import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import { useUser, useMutation } from './lib/wundergraph';
import './TweetBox.css';

function TweetBox () {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const { trigger } = useMutation({
    operationName: 'AddTweet',
    requiresAuthentication: true
  });

  const user = useUser().data;

  const sendTweet = e => {
    e.preventDefault();

    if (tweetMessage) {
      trigger({
        data: {
          displayName: user.firstName,
          username: user.firstName + '_' + user.lastName,
          verified: true,
          text: tweetMessage,
          avatar: user.avatarUrl,
          image: tweetImage,
          date: new Date()
        }
      });
    }

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className='tweetBox'>
      <div className='tweetBox__input'>
        <Avatar src={user.avatarUrl} referrerPolicy='no-referrer' />
        <input
          value={tweetMessage}
          onChange={(textFieldContents) => setTweetMessage(textFieldContents.target.value)}
          placeholder="What's happening?"
          type='text'
        />
      </div>
      <input
        placeholder='Optional: Enter image URL'
        value={tweetImage}
        onChange={(e) => setTweetImage(e.target.value)}
        type='text'
        className='tweetBox__imageInput'
      />
      <Button onClick={sendTweet} type='submit' className='tweetBox__button'>
        Tweet
      </Button>
    </div>
  );
}

export default TweetBox;
