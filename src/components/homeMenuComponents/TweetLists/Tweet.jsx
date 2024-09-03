import React from 'react';
import '../styles.css'

const Tweet = ({ username, name, avatar, content, timestamp, picture, link, comments, retweets, quotes, likes }) => (
  <div className="tweet">
    <div className='tweet-avatar'>
        <img id='avatar' src={avatar}/>
    </div>

    <div className='tweet-main'>
        <div className='tweet-title'>
            <div className='title'>
                <p id='name'>{name}</p>
                <p id='username'>{username}</p>
                <p id='date'><b>·</b>{timestamp}</p>
            </div>

            <a href='/' className='more_options'>
                <img src={require('../images/more_options.png')}/>
            </a>
        </div>

        <div className='tweet-content'>
            <p>{content}</p>
        </div>

        <div id='tweet-image' className='tweet-image'>
            <img id='tweet-image' src={picture}/>
        </div>

        <a id='link'href={link}>from {username}</a>

        <div className='tweet-actions'>
            <div className='comments'>
                <img/>
                {comments}
            </div>

            <div className='retweets'>
                <img/>
                {retweets}
            </div>

            <div className='quotes'>
                <img/>
                {quotes}
            </div>

            <div className='likes'>
                <img/>
                {likes}
            </div>
        </div>
    </div>
  </div>
);

export default Tweet;
