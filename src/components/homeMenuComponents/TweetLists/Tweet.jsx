import React from "react";
import "../styles.css";
import { COMMENTS, RETWEETS, LIKES, SHARE } from "../images";

export default function Tweet({
  username,
  name,
  avatar,
  content,
  timestamp,
  picture,
  link,
  comments,
  retweets,
  quotes,
  likes,
  id,
  deleteTweet,
}) {
  const formatTimestamp = (timestamp) => {
    const date = timestamp.replace(" UTC", "");

    return date;
  };

  const date = formatTimestamp(timestamp);

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img id="avatar" src={avatar} />
      </div>

      <div className="tweet-main">
        <div className="tweet-title">
          <div className="title">
            <p id="name">{name}</p>
            <p id="username">{username}</p>
            <p id="date">{date}</p>
          </div>

          <button onClick={() => deleteTweet(id)} className="more_options">
            <img src={require("../images/more_options.png")} alt="Options" />
          </button>
        </div>

        <div className="tweet-content">
          <p>{content}</p>
        </div>

        <div id="tweet-image" className="tweet-image">
          <img id="tweet-image" src={picture} />
        </div>

        <a id="link" href={link}>
          from {username}
        </a>

        <div className="tweet-actions">
          <div className="comments">
            {/* <img/> */}
            {COMMENTS}
            {comments}
          </div>

          <div className="retweets">
            {/* <img/> */}
            {RETWEETS}
            {retweets}
          </div>

          <div className="quotes">
            {/* <img/> */}
            {SHARE}
            {quotes}
          </div>

          <div className="likes">
            {/* <img/> */}
            {LIKES}
            {likes}
          </div>
        </div>
      </div>
    </div>
  );
}
