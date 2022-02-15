import React from "react";
import {List, ListItem} from '@mui/material';
import {NavLink} from "react-router-dom";


export default function ChatList({ chats }) {
    console.log(chats);
    return (
        <List className='list'>
            {chats.map(chat =>
                <ListItem key={chat.id}>
                    <NavLink style={({isActive}) => ({color: isActive ? 'green' : 'darkgray'})}
                             to={`/chats/${chat.id}`} >{chat.name}
                    </NavLink>
                </ListItem>)}
        </List>
    )
}



