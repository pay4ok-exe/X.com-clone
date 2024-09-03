import './styles.css'
import { HOME_SVG, EXPLORE_SVG, NOTIFICATIONS_SVG, MESSAGES_SVG, BOOKMARKS_SVG } from './images'
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
        }
    ];

    return(
        <div className='w-35 mt-3 mx-5 mb-2'>
            <div className="logo">
                <img src={require('./images/logo.svg')} className='logo-icon'></img>
            </div>

            {menu.map((item, index)=>(
                <MenuItem key={index} item={item}/>
            ))}
        </div>
        
    )
}