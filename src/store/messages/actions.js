import {AUTHORS} from "../../Utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';
export const INIT_MESSAGES_BY_CHAT_ID = 'MESSAGES::INIT_MESSAGES_BY_CHAT_ID';

export const deleteMessage = (id) => ({
    type: DELETE_MESSAGE,
    payload: {
        id,
    },
});

export const initMessages = (id) => ({
    type: INIT_MESSAGES_BY_CHAT_ID,
    payload: {
        id,
    },
});

export const addMessage = (id, text) => ({
    type: ADD_MESSAGE,
    payload: {
        id,
        text,
    },
});

let timeout;

export const addMessageWithThunk = (id, text) => (dispatch, getState) => {
    dispatch(addMessage(id, text));

    if (text.author !== AUTHORS.BOT) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const newMsg = {
                value: 'Hello! You entered message',
                author: AUTHORS.BOT,
            };
            dispatch(addMessage(id, newMsg));
        }, 3000);
    };
};

