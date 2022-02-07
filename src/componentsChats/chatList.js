import React from "react";
import {List, ListItem} from '@mui/material';
import {Link} from "react-router-dom";

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
        <List>
            {chatList.map(chat =>
                <ListItem key={chat.id}>
                    <Link to={`/chats/${chat.id}`} >{chat.name}</Link>
                </ListItem>)}
        </List>
    )
}



