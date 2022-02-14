import {BrowserRouter, Routes , Route, Link, NavLink} from "react-router-dom";
import {Chat} from '../components Chat/Chat'
import ChatList from "../componentsChats/chatList";
import {Profile} from "../components Proflie/profile";

const Home = () => <h1>Homepage</h1>

export const Router = () => {
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
                <Route path='' element={<Home />}/>
                <Route path='chats'>
                    <Route index element={<ChatList />}/>
                    <Route path=':chatId' element={<Chat />}/>
                </Route>
                <Route path='profile' element={<Profile />}/>
            </Routes>
        </BrowserRouter>
    )
}