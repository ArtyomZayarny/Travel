import React,{useContext, useEffect} from 'react';
import {EmailContext} from '../context/EmailContext'
import {userType} from './Inbox'

const Deleted = () => {
    const emailData = useContext(EmailContext);
    useEffect( () => {
        
    }, [emailData]);

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
export default Deleted