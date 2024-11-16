import React, { useEffect, useState } from "react";
import Tweet from "./Tweet";
import userLogo from "../images/profile.png";

const TweetList = ({ tweets, deleteTweet }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet, index) => (
        <Tweet
          key={tweet.id}
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
          id={tweet.id}
          deleteTweet={deleteTweet}
        />
      ))}
    </div>
  );
};

export default TweetList;
