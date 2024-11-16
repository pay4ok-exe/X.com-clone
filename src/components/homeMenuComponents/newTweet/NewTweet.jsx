import { EARTH, MEDIA, GIF, POLL, EMOJI, SCHEDULE, LOCATION } from "../images";
export default function NewTweet() {
  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img id="avatar" src={require("../images/profile.png")} />
      </div>
      <div className="new-tweet-container">
        <input id="new-tweet-input" placeholder="What is happening?!" />
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
          <button type="button" className="new-tweet-btn">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
