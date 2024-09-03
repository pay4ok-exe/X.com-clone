import NewTweet from "./newTweet/NewTweet";
import TweetList from "./TweetLists/TweetLists";

export default function HomeMenu(){
    return(
        <div className="w-50">
            {/* <h5>Home</h5> */}
            {/* <NewTweet/> */}
            <TweetList/>
        </div>
    )
}