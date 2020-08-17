import React,{useContext, useEffect} from 'react'
import {EmailContext} from '../context/EmailContext'
import './Inbox.scss'

export interface userType {
    first_name:string,
    object?:string,
    text?:string,
    last_name:string,
    avatar:string,
    id:string
}

const Inbox = () => {
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
export default Inbox