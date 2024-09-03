import './styles.css'

export default function MenuItem({item}){
    return(
        <div className='d-flex align-items-center menu-item'>
            <div style={{width: 30, height: 30, marginLeft: '1rem'}}>
                {item.icon}
            </div>
            <p className='m-3 mt-2 mb-2' style={{fontSize: 20}}>
                {item.name}
            </p>
        </div>
    );
}