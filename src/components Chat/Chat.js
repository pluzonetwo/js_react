import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import {AUTHORS} from "../Utils/constants";
import ChatList from "../componentsChats/chatList";
import Message from "../componets message/message";
import {Form} from "../components form/form";
import '../App.css'

const chats = [{id: 'chat 1'}];
const messages = {
    chat1: [],
};

export const Chat = () => {
    const params = useParams();
    const {chatId} = params;

    const [messageList, setMessageList] = useState({
        chat1: [],
        chat2: [],
        chat3: [],
    });
    const messageRef = useRef();

    const handleAddMessage = ({value}) => {
        const newMsg = {
            value,
            author: AUTHORS.ME,
        }
        setMessageList((prevMessageList) => ({
            ...prevMessageList,
            [chatId]: [...prevMessageList[chatId], newMsg]
    }));
    };

    useEffect(() => {
        messageRef.current?.scrollIntoView();

        if (messageList[chatId][messageList[chatId].length - 1]?.author === AUTHORS.ME) {
            const newMsg = {
                value: 'You entered message',
                author: AUTHORS.BOT,
            }
            setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
        }
    }, [messageList]);

    return( <>
        <ChatList />
        <div className='wrapper' >
            {messageList.map((message, index) =>
                <Message key={index} author={message.author} text={message.value} id={chatId}/>)}
            <div ref={messageRef}/>
        </div>
        <Form onSubmit={handleAddMessage} />
    </>)
}