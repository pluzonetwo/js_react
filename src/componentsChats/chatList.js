import React from "react";
import {List, ListItem} from '@mui/material';

const chatList = [
    {
        id: 1,
        name: 'Chat # 1',
    },
    {
        id: 1,
        name: 'Chat # 2',
    },
    {
        id: 1,
        name: 'Chat # 3',
    },
]

export default function ChatList() {
    return (
        <List>
            {chatList.map(chat => <ListItem key={chat.id}>{chat.name}</ListItem>)}
        </List>
    )
}



