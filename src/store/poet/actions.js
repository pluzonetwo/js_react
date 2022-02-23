import {apiURL} from "../../Utils/constants";

export const GET_POET_REQUEST = 'POET::GET_POET_REQUEST';
export const GET_POET_SUCCESS = 'POET::GET_POET_SUCCESS';
export const GET_POET_FAILURE = 'POET::GET_POET_FAILURE';

export const getPoetRequest = () => ({
    type: GET_POET_REQUEST,
});

export const getPoetSuccess = (poet) => ({
    type: GET_POET_SUCCESS,
    payload: poet,
});

export const getPoetFailure = (error) => ({
    type: GET_POET_FAILURE,
    payload: error,
});

export const getPoet = () => async (dispatch) => {
    dispatch(getPoetRequest());

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(response.message);
        }
        const result = await response.json();
        dispatch(getPoetSuccess(result));
    } catch (err) {
        dispatch(getPoetFailure(err));
        console.warn(err);
    }
};