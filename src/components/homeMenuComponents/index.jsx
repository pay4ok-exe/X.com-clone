import React, { useState, useEffect } from "react";
import NewTweet from "./newTweet/NewTweet";
import TweetList from "./TweetLists/TweetLists";
import { tweetsData } from "./tweets_with_ids.json";
import "./styles.css";

export default function HomeMenu() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Initialize tweets with filtered media tweets from imported data
    setTweets(getTweetsWithMedia(tweetsData));
  }, []);

  // Function to shuffle an array (Fisher-Yates Shuffle Algorithm)
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // Function to filter tweets that contain media (pictures, videos, or GIFs) after randomizing the array
  const getTweetsWithMedia = (tweets) => {
    const shuffledTweets = shuffleArray(tweets); // Shuffle the tweets first
    return shuffledTweets.filter(
      (tweet) => tweet.pictures && tweet.pictures.length > 0
    );
  };

  // Function to add a new tweet
  const addTweet = (newTweet) => {
    newTweet.id = Math.max(0, ...tweets.map((t) => t.id)) + 1; // Assign a new ID by incrementing the highest current ID
    const newTweetsList = [newTweet, ...getTweetsWithMedia(tweets)]; // Add new tweet at the beginning and apply media filter to the rest
    setTweets(newTweetsList.slice(0, 10)); // Limit to 10 tweets
  };

  // Function to delete a tweet
  const deleteTweet = (tweetId) => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== tweetId); // Remove the tweet by ID
    setTweets(updatedTweets);
  };
  return (
    <div style={{ width: "48%" }}>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ height: "5rem", borderBottom: "1px solid #e1e8ed" }}>
        <div
          className="d-flex justify-content-center align-items-center hover  px-5 "
          style={{ flex: 1, height: "100%" }}>
          <a
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}>
            For you
          </a>
        </div>

        <div
          className="d-flex justify-content-center align-items-center  hover  px-5"
          style={{ flex: 1, height: "100%" }}>
          <p
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "grey",
            }}>
            Following
          </p>
        </div>
      </div>
      <NewTweet addTweet={addTweet} />
      <TweetList tweets={tweets} deleteTweet={deleteTweet} />
    </div>
  );
}
