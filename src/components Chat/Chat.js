import React, {useEffect, useRef, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import {AUTHORS} from "../Utils/constants";
import ChatList from "../componentsChats/chatList";
import Message from "../componets message/message";
import {Form} from "../components form/form";
import '../App.css'
import {onChildAdded, set, onValue} from "firebase/database";
import {getMessagesRefByChatId, getMessagesRefById, getMessagesListRefByChatId} from "../services/firebase";

export const Chat = ({chats, addChat, deleteChat}) => {
    const {chatId} = useParams();

    const [messages, setMessages] = useState([]);

    const messageRef = useRef();

    const handleAddMessage = (value) => {
        const newMsg = {
            value,
            author: AUTHORS.ME,
            id: `msg-${Date.now()}`,
        }
        set(getMessagesRefById(chatId, newMsg.id), newMsg);
    };

    useEffect(() => {
        const unsubscribe = onValue(
            getMessagesRefByChatId(chatId),
            (snapshot) => {
                if (!snapshot.val()?.empty) {
                    setMessages(null);
                }
            }
        );

        return unsubscribe;
    }, [chatId]);

    useEffect(() => {
        const unsubscribe = onChildAdded(
            getMessagesListRefByChatId(chatId),
            snapshot => {
                setMessages((prevMessages) => [...prevMessages, snapshot.val()]);
            }
        );

        return unsubscribe;
    }, [chatId]);

    useEffect(() => {
        messageRef.current?.scrollIntoView();
    }, [messages]);

    if (!messages) {
        return <Navigate to='/chats' replace/>;
    }

    return (
        <>
            <ChatList chats={chats} addChat={addChat} deleteChat={deleteChat}/>
            <div className='wrapper'>
                {messages.map((message, index) =>
                    <Message key={index} author={message.author} text={message.value}/>)}
                <div ref={messageRef}/>
            </div>
            <Form onSubmit={handleAddMessage}/>
        </>
    );
};