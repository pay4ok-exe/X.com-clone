import NewTweet from "./newTweet/NewTweet";
import TweetList from "./TweetLists/TweetLists";
import './styles.css'

export default function HomeMenu(){
    return(
        <div style={{width: '48%'}}>
            <div className="d-flex justify-content-between align-items-center" style={{height: '5rem', borderBottom: '1px solid #e1e8ed'}}>
                <div className="d-flex justify-content-center align-items-center hover  px-5 " style={{flex:1, height: '100%'}}>
                    <a style={{fontWeight: 'bold', textDecoration: 'none', color: 'black'}}>For you</a>
                </div>

                <div className="d-flex justify-content-center align-items-center  hover  px-5" style={{flex:1,  height: '100%'}}>
                    <p style={{fontWeight: 'bold', textDecoration: 'none', color: 'grey'}}>Following</p>
                </div>
            </div>
            <TweetList/>
        </div>
    )
}