import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {profileReducer} from "./profile/reducer";
import {chatsReducer} from "./chats/reducer";
import {messagesReducer} from "./messages/reducer";
import thunk from "redux-thunk";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {poetReducer} from "./poet/reducer";

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    poet: poetReducer,
});

const persistConfig = {
    key: 'reactMessenger',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhansers(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
