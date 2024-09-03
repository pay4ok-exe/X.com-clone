import './styles.css'
import { HOME_SVG, EXPLORE_SVG, NOTIFICATIONS_SVG, MESSAGES_SVG, BOOKMARKS_SVG, COMMUNITIES_SVG, PROFILE_SVG, MORE_SVG } from './images'
import MenuItem from './menuItem';


export default function SideMenu(){
    const menu = [
        {
            icon: HOME_SVG,
            name: 'Home'
        },
        {
            icon: EXPLORE_SVG,
            name: 'Explore'
        },
        {
            icon: NOTIFICATIONS_SVG,
            name: 'Notifications'
        },
        {
            icon: MESSAGES_SVG,
            name: 'Messages'
        },
        {
            icon: BOOKMARKS_SVG,
            name: 'Bookmarks'
        },
        {
            icon: COMMUNITIES_SVG,
            name: 'Communities'
        },
        {
            icon: PROFILE_SVG,
            name: 'Profile'
        },
        {
            icon: MORE_SVG,
            name: 'More'
        }
    ];

    return(
        <div className='w-35 mt-3 mx-5 mb-2 d-flex flex-column' style={{height:'100vh'}}>
            <div className="logo mb-4">
                <img src={require('./images/logo.svg')} className='logo-icon'></img>
            </div>

            {menu.map((item, index)=>(
                <MenuItem key={index} item={item} style={{gap: '20px'}}/>
            ))}

            <button type="button" className="btn">Post</button>

            <div className='profile'>
                <img src={require('./images/profile.png')}/>
                <div>
                    <p id='pt1'>pay4ok</p>
                    <p id='pt2'>@pay4ok_exe</p>
                </div>
                <a href='/' className='more_options'>
                    <img src={require('./images/more_options.png')}/>
                </a>
            </div>
        </div>
        
    )
}