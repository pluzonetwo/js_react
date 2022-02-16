import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {Chat} from '../components Chat/Chat'
import ChatList from "../componentsChats/chatList";
import {Profile} from "../components Proflie/profile";
import {useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from "../store/chats/actions";
import {addMessage} from "../store/messages/actions";

const Home = () => <h1>Homepage</h1>

// const initialChats = [
//     {
//         id: 1,
//         name: 'Chat # 1',
//     },
//     {
//         id: 2,
//         name: 'Chat # 2',
//     },
//     {
//         id: 3,
//         name: 'Chat # 3',
//     },
// ];
//
// const initialMessages = initialChats.reduce((acc, el) => {
//     acc[el.id] = [];
//     return acc;
// }, {});

export const Router = () => {
    // const [chatList, setChatList] = useState(initialChats);
    // const [messages, setMessages] = useState(initialMessages);

    const chatList = useSelector(state => state.chats);
    const dispatchChats = useDispatch();

    const messages = useSelector(state => state.messages);
    const dispatchMessages = useDispatch();

    const handleAddChat = ({value}, chatId, newMsg) => {
        const newId = `chat-${Date.now()}`;

        const newChat = {
            id: newId,
            name: value,
        };

        dispatchChats(addChat(newId, value));
        dispatchMessages(addMessage(chatId, newMsg));
    };

    const handleDeleteChat = (idToDelete, chatId, newMsg) => {
        dispatchChats(deleteChat(idToDelete));

        dispatchMessages(addMessage(chatId, newMsg));
    };


    const handleAddMessage = (chatId, newMsg) => {
        dispatchMessages(addMessage(chatId, newMsg));
    };

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
                    <Route index element={<ChatList chats={chatList} addChat={handleAddChat} deleteChat={handleDeleteChat} />}/>
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