import NewTweet from "./newTweet/NewTweet";
import TweetList from "./TweetLists/TweetLists";

export default function HomeMenu(){
    return(
        <div style={{width: '48%'}}>
            {/* <h5>Home</h5> */}
            {/* <NewTweet/> */}
            <TweetList/>
        </div>
    )
}