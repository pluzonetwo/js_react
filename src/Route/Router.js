import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {Chat} from '../components Chat/Chat'
import ChatList from "../componentsChats/chatList";
import {Profile} from "../components Proflie/profile";
import {useState} from "react";

const Home = () => <h1>Homepage</h1>

const initialChats = [
    {
        id: 1,
        name: 'Chat # 1',
    },
    {
        id: 2,
        name: 'Chat # 2',
    },
    {
        id: 3,
        name: 'Chat # 3',
    },
];

const initialMessages = initialChats.reduce((acc, el) => {
    acc[el.id] = [];
    return acc;
}, {});

export const Router = () => {
    const [chatList, setChatList] = useState(initialChats);
    const [messages, setMessages] = useState(initialMessages);

    const handleAddMessage = (chatId, newMsg) => {
        setMessages((prevMessageList) => ({
            ...prevMessageList,
            [chatId]: [...prevMessageList[chatId], newMsg]
        }));
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
            </ul>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='chats'>
                    <Route index element={<ChatList chats={chatList} />}/>
                    <Route path=':chatId'
                           element={
                        <Chat
                            messages={messages}
                            addMessage={handleAddMessage}
                            chats={chatList}/>
                    }
                    />
                </Route>
                <Route path='profile' element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}