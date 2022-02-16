export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (id, text) => ({
    type: ADD_MESSAGE,
    payload: {
        id,
        text,
    },
});

