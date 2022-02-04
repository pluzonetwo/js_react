import './App.css';
import Message from './componets message/message'
import React, {useRef, useState} from "react";
import { Form } from './components form/form'
import {useEffect} from "react";
import {AUTHORS} from "./Utils/constants";
import ChatList from "./componentsChats/chatList";

function App() {

  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef();

  const handleAddMessage = ({value}) => {
    const newMsg = {
      value,
      author: AUTHORS.ME,
    }
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  }

  useEffect(() => {
    messageRef.current?.scrollIntoView();

    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      const newMsg = {
        value: 'You entered message',
        author: AUTHORS.BOT,
      }
      setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
    }
  }, [messageList]);

  return <><ChatList />
    <div className='wrapper' >
    {messageList.map((message, index) => <Message key={index} author={message.author} text={message.value}/>)}
    <div ref={messageRef}/>
  </div>
  <Form onSubmit={handleAddMessage} />
  </>
}

export default App;
