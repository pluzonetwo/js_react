import {ADD_MESSAGE} from "./actions";

const initialState = [];

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return [...state, {text: action.payload.text, id: action.payload.id}];
        }
        default:
            return state;
    }
}