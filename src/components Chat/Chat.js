import React, {useEffect, useRef} from "react";
import {Navigate, useParams} from "react-router-dom";
import {AUTHORS} from "../Utils/constants";
import ChatList from "../componentsChats/chatList";
import Message from "../componets message/message";
import {Form} from "../components form/form";
import '../App.css'

export const Chat = ({ messages, addMessage, chats, addChat, deleteChat }) => {
    const {chatId} = useParams();

    const messageRef = useRef();

    const handleAddMessage = ({value}) => {
        const newMsg = {
            value,
            author: AUTHORS.ME,
        }
        addMessage(chatId, newMsg);
    };

    useEffect(() => {
        messageRef.current?.scrollIntoView();
        let timeout;
        if (messages[chatId]?.[messages[chatId].length - 1]?.author === AUTHORS.ME) {
            timeout = setTimeout(() => {
                const newMsg = {
                    value: 'Hello! You entered message',
                    author: AUTHORS.BOT,
                };
                addMessage(chatId, newMsg);
            }, 3000);
        }
        return () => {
            clearTimeout(timeout);
        }
    }, [messages]);

    if (!messages[chatId]){
        return <Navigate to='/chats' replace/>;
    }

    return (
        <>
            <ChatList chats={chats} addChat={addChat} deleteChat={deleteChat}/>
            <div className='wrapper'>
                {messages[chatId].map((message, index) =>
                    <Message key={index} author={message.author} text={message.value}/>)}
                <div ref={messageRef}/>
            </div>
            <Form onSubmit={handleAddMessage}/>
        </>
    );
};