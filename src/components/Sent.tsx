import React,{useEffect,useContext} from 'react'
import {EmailContext} from '../context/EmailContext'
import {userType} from './Inbox'


const Sent = () => {
   const emailData = useContext(EmailContext);
    useEffect( () => {
        console.log('sent')
        
    }, []);

    return (
        <>
            <ul className="list inbox">
                {emailData.map( (user:userType, index) =>
                    <li key={user.id} className={index % 2 === 0 ? 'even': 'odd'}>
                        <span>{`${user.first_name} ${user.last_name}`}</span>
                         { user.object !== undefined ? <span>{user.object}</span> : <span>{'JS'}</span>}
                        { user.text !== undefined ? <span>{user.text}</span> : <span>{user.avatar}</span>}
                    </li> )}
            </ul>
        </>
    )
}
export default Sent