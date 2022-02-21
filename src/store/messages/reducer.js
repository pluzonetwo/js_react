import {ADD_MESSAGE, DELETE_MESSAGE, INIT_MESSAGES_BY_CHAT_ID} from "./actions";

const initialState = {};


export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {...state, [action.payload.id]: [...state[action.payload.id], action.payload.text]};
        }
        case INIT_MESSAGES_BY_CHAT_ID: {
            return {...state, [action.payload.id]: []}
        }
        case DELETE_MESSAGE: {
            delete state[action.payload.id];
            return state;
        }
        default:
            return state;
    }
}