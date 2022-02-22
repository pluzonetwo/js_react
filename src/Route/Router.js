import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {Chat} from '../components Chat/Chat'
import ChatList from "../componentsChats/chatList";
import {useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from "../store/chats/actions";
import {addMessage, addMessageWithThunk, deleteMessage, initMessages} from "../store/messages/actions";
import {messagesSelector} from "../store/messages/selectors";
import {chatsSelector} from "../store/chats/selectors";
import {Profile} from "../components Proflie/profile";
import {DataApi} from '../components dataApi/DataApi';

const Home = () => <h1>Homepage</h1>

export const Router = () => {

    const chatList = useSelector(chatsSelector);
    const dispatchChatList = useDispatch();

    const messages = useSelector(messagesSelector);
    const dispatchMessages = useDispatch();

    const handleAddChat = ({value}) => {
        const newId = `chat-${Date.now()}`;
        const newChat = {
            id: newId,
            name: value,
        };

        dispatchChatList(addChat(newId, value));
        dispatchMessages(initMessages(newId));
    };

    const handleDeleteChat = (idToDelete) => {
        dispatchChatList(deleteChat(idToDelete));
        dispatchMessages(deleteMessage(idToDelete));
    };


    const handleAddMessage = (chatId, newMsg) => {
        dispatchMessages(addMessageWithThunk(chatId, newMsg));
    }

    return (
        <BrowserRouter>
            <ul>
                <li>
                    <NavLink
                        style={({isActive}) => ({color: isActive ? 'green' : 'darkgray'})}
                        to=''>Homepage
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({isActive}) => ({color: isActive ? 'green' : 'darkgray'})}
                        to='profile'>Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({isActive}) => ({color: isActive ? 'green' : 'darkgray'})}
                        to='chats'>Chats
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({isActive}) => ({color: isActive ? 'green' : 'darkgray'})}
                        to='data'>DataApi
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='chats'>
                    <Route index element={<ChatList chats={chatList} addChat={handleAddChat} deleteChat={handleDeleteChat} />}/>
                    <Route path=':chatId'
                           element={
                        <Chat
                            addChat={handleAddChat}
                            deleteChat={handleDeleteChat}
                            messages={messages}
                            addMessage={handleAddMessage}
                            chats={chatList}/>
                    }
                    />
                </Route>
                <Route path='profile' element={<Profile />}/>
                <Route path='data' element={<DataApi />}/>
            </Routes>
        </BrowserRouter>
    )
}