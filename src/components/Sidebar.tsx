import React from 'react'
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {Link} from 'react-router-dom'

interface SiderbarProps {
    openModal: ()=>void
}
const Sidebar:React.FC<SiderbarProps> = (props) => {

    return (
        <ul className="sidebar">
            <List className="list">
                <div className="btn" onClick={ () => {props.openModal()}}>Write</div>
                {["Inbox", "Sent", "Deleted"].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <Link to={`/${text === 'Inbox' ? 'home' : text.toLowerCase()}`}><ListItemText primary={text} /></Link>
                </ListItem>
                ))}
            </List>
        </ul>
    )
}
export default Sidebar;