import {ADD_MESSAGE} from "./actions";

const initialState = [];

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return [...state, {id: action.payload.id, text: action.payload.text}];
        }
        default:
            return state;
    }
}