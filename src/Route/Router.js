import {BrowserRouter, Routes , Route, Link} from "react-router-dom";
import {Chat} from '../components Chat/Chat'
import ChatList from "../componentsChats/chatList";

const Home = () => <h1>Homepage</h1>
const Profile = () => <h1>Profile</h1>

export const Router = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to=''>Homepage</Link>
                </li>
                <li>
                    <Link to='profile'>Profile</Link>
                </li>
                <li>
                    <Link to='chats'>Chats</Link>
                </li>
            </ul>
            <Routes>
                <Route path='' element={<Home />}/>
                <Route path='chats'>
                    <Route index element={<ChatList />}/>
                    <Route path=':chatId' element={<Chat />}/>
                </Route>
                <Route path='profile' element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}