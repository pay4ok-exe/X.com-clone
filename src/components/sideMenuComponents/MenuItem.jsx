export default function MenuItem({item}){
    return(
        <div className='d-flex rounded-pill justify-content-start align-items-center'>
            <div style={{width: 30, height: 30}}>
                {item.icon}
            </div>
            <p className='m-3' style={{fontSize: 20}}>{item.name}</p>
        </div>
    );
}