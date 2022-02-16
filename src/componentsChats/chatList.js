import React from "react";
import {List, ListItem} from '@mui/material';
import {NavLink} from "react-router-dom";
import {Form} from "../components form/form";


export default function ChatList({ chats, addChat, deleteChat }) {
    return (
        <>
            <Form onSubmit={addChat} />
            <List className='list'>
                {chats.map(chat =>
                    <ListItem key={chat.id}>
                        <NavLink style={({isActive}) => ({color: isActive ? 'green' : 'darkgray'})}
                                 to={`/chats/${chat.id}`}><p>{chat.name}</p>
                        </NavLink>
                        <div onClick={() => {deleteChat(chat.id)}} >X</div>
                    </ListItem>)}
            </List>
        </>
    )
}



