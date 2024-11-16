import React, { useState } from "react";
import { EARTH, MEDIA, GIF, POLL, EMOJI, SCHEDULE, LOCATION } from "../images";

export default function NewTweet({ addTweet }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    const newTweet = {
      id: Math.random(),
      user: {
        username: "@pay4ok_exe", // Example static user info, replace with dynamic data
        name: "pay4ok",
        avatar:
          "http://localhost:5173/src/components/sideMenuComponents/images/profile.png",
      },
      text: input,
      date: new Date().toISOString(),
      pictures: [],
      stats: {
        comments: 0,
        retweets: 0,
        quotes: 0,
        likes: 0,
      },
    };
    addTweet(newTweet);
    setInput(""); // Clear the input after submitting
  };

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img id="avatar" src={require("../images/profile.png")} />
      </div>
      <div className="new-tweet-container">
        <input
          id="new-tweet-input"
          placeholder="What is happening?!"
          value={input}
          onChange={handleInputChange}
        />
        <div className="reply-container">
          <div className="symbol">{EARTH}</div>
          <p>Everyone can reply</p>
        </div>
        <hr />
        <div className="actions-container">
          <div className="symbol symbols-container">
            {MEDIA}
            {GIF}
            {POLL}
            {EMOJI}
            {SCHEDULE}
            {LOCATION}
          </div>
          <button
            type="button"
            className="new-tweet-btn"
            onClick={handleSubmit}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
