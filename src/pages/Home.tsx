import React, {useState, useEffect,useContext} from 'react';
import apiClient from '../apiClient'
import {EmailContext} from '../context/EmailContext'
import Sidebar from '../components/Sidebar'
import {BrowserRouter as Router } from "react-router-dom";
import Content from '../components/Content'
import Modal from '../components/Modal'
import './Home.scss'


interface IEmail {
    id:number
    email:string,
    first_name:string,
    last_name:string,
    avatar:string
}
const Home =()=> {
    
    const [data,setData] = useState({
        data:[]
    })
    const [showModal,setShowMOdal] = useState(false);
    const [emailContext, setEmailContext] = useState<IEmail[] | any>([]);
    
    useEffect(() => {
        apiClient.get('/api/users?page=2')
        .then( (res) => {
             let AxiosContext = res.data.data;
             setEmailContext(AxiosContext);
        })
    },[setEmailContext])

    const updateContext = (newEmail) =>{
        
        setEmailContext([...emailContext, newEmail])
    }

    const openModal = () => {
        setShowMOdal(true)
    }
    const closeModal = () => {
        setShowMOdal(false)
    }

    return (
        <>
            <div className="home">
                <EmailContext.Provider value={emailContext}>
                    <Router>
                        <div className="home__content">
                            <Sidebar openModal={openModal} />
                            <Content />
                            {showModal && <Modal updateContext={updateContext}  closeModal={closeModal}/>}
                        </div>
                    </Router>
                </EmailContext.Provider>
            </div>
        </>

    )
}
export default Home