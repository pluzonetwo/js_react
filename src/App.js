import './App.css';
import Message from './componets message/message'
import { useState } from "react";
import { Form } from './components form/form'
import {useEffect} from "react";

function App() {

  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = ({author, value}) => {
    setMessageList((prevMessageList) => [...prevMessageList, {author, value}]);
  }

  useEffect((author, value) => {
    if (messageList.length % 2 !== 0) {
      handleAddMessage({author: 'Robot', value: 'You send message'});
    }
  }, [messageList.length]);

  return <div className='wrapper' >
    <h1>Messenger</h1>
    {messageList.map((el, index) => <Message key={index} text={el.value} author={el.author}/>)}
    <Form onSubmit={handleAddMessage} />
  </div>
}

export default App;
