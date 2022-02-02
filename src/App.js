import './App.css';
import Message from './componets message/message'
import { useState } from "react";
import { Form } from './components form/form'
import {useEffect} from "react";
import {AUTHORS} from "./Utils/constants";

function App() {

  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = ({value}) => {
    const newMsg = {
      value,
      author: AUTHORS.ME,
      bot: AUTHORS.BOT,
    }
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  }

  useEffect(() => {
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      const newMsg = {
        value: 'You entered message',
        bot: AUTHORS.BOT,
      }
      setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
    }
  }, [messageList]);

  return <div className='wrapper' >
    <h1>Messenger</h1>
    {messageList.map((message, index) => <Message key={index} author={message.author} text={message.value}/>)}
    <Form onSubmit={handleAddMessage} />
  </div>
}

export default App;
