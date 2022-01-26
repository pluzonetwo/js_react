import './App.css';
import Message from './componets message/message'

function App() {
  const text = 'Текст компонента Message';

  return <div className='wrapper' >
    <h1>Домашка номер один</h1>
    <Message text={text}/>
  </div>
}

export default App;
