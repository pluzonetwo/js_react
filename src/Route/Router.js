import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import {Chat} from '../components Chat/Chat'
import ChatList from "../componentsChats/chatList";
import {useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from "../store/chats/actions";
import {addMessageWithThunk, deleteMessage, initMessages} from "../store/messages/actions";
import {messagesSelector} from "../store/messages/selectors";
import {chatsSelector} from "../store/chats/selectors";
import {Profile} from "../components Proflie/profile";
import {Poet} from '../components Poet/Poet';
import {useState, useEffect} from "react";
import {PublicRoute} from "../PublicRoute/PublicRoute";
import {PrivateRoute} from "../PrivateRoute/PrivateRoute";
import {HomePage} from "../components Home/HomePage";
import {auth} from '../services/firebase'

export const Router = () => {

    const [authed, setAuthed] = useState(false);
    const chatList = useSelector(chatsSelector);
    const dispatchChatList = useDispatch();

    const messages = useSelector(messagesSelector);
    const dispatchMessages = useDispatch();

    const authorize = () => {
        setAuthed(true);
    };

    const unauthorize = () => {
        setAuthed(false);
    };

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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });

        return unsubscribe;
    }, []);

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
                        to='poet'>Poet
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path='' element={<PublicRoute authed={authed} />}>
                    <Route path='' element={<HomePage />} />
                    <Route path='/signup' element={<HomePage isSignUp />} />
                </Route>
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
                <Route path='profile' element={<PrivateRoute authed={authed} />}>
                        <Route path='' element={<Profile onLogout={unauthorize} />} />
                </Route>
                <Route path='poet' element={<Poet />}/>
            </Routes>
        </BrowserRouter>
    )
}