import React from "react";
import {List, ListItem} from '@mui/material';
import {Link, NavLink} from "react-router-dom";

const chatList = [
    {
        id: 'chat1',
        name: 'Chat # 1',
    },
    {
        id: 'chat2',
        name: 'Chat # 2',
    },
    {
        id: 'chat3',
        name: 'Chat # 3',
    },
]

export default function ChatList() {
    return (
        <List className='list'>
            {chatList.map(chat =>
                <ListItem key={chat.id}>
                    <NavLink style={({isActive}) => ({color: isActive ? 'green' : 'darkgray'})}
                             to={`/chats/${chat.id}`} >{chat.name}
                    </NavLink>
                </ListItem>)}
        </List>
    )
}



