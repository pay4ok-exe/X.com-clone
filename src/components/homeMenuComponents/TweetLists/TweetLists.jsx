import React, { useEffect, useState } from 'react';
import Tweet from './Tweet'; // Assuming Tweet component is in the same directory
import {tweetsData} from '../tweets.json'; // Import the JSON file

const TweetList = () => {
  const [tweets, setTweets] = useState([]);

  // Function to shuffle an array (Fisher-Yates Shuffle Algorithm)
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Function to filter tweets that contain media (pictures, videos, or GIFs) after randomizing the array
  const getTweetsWithMedia = (tweets) => {
    const shuffledTweets = shuffleArray(tweets); // Shuffle the tweets first
    return shuffledTweets.filter(tweet => 
      (tweet.pictures && tweet.pictures.length > 0)
    ).slice(0, 1); // Limit to 10 tweets with media
  };

  useEffect(() => {
    // Simulate fetching JSON data
    const tweetsWithMedia = getTweetsWithMedia(tweetsData);
    setTweets(tweetsWithMedia); // Set the tweets state with filtered and shuffled JSON data
  }, []);

  return (
    <div className="tweet-list">
      {tweets.map((tweet, index) => (
        <Tweet
          key={index}
          username={tweet.user.username}
          name={tweet.user.name}
          avatar={tweet.user.avatar}
          content={tweet.text}
          timestamp={tweet.date}
          picture={tweet.pictures[0]}
          link={tweet.link}
          comments={tweet.stats.comments}
          retweets={tweet.stats.retweets}
          quotes={tweet.stats.quotes}
          likes={tweet.stats.likes}
        />
      ))}
    </div>
  );
};

export default TweetList;
