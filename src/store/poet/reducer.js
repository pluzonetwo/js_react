import {GET_POET_FAILURE, GET_POET_REQUEST, GET_POET_SUCCESS} from "./actions";
import {FETCH_STATUSES} from "../../Utils/constants";

const initialState = {
    data: [],
    error: false,
    status: FETCH_STATUSES.IDLE,
};

export const poetReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POET_REQUEST: {
            return {
                ...state,
                error: null,
                status: FETCH_STATUSES.REQUEST,
            };
        }
        case GET_POET_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                status: FETCH_STATUSES.SUCCESS,
            };
        }
        case GET_POET_FAILURE: {
            return {
                ...state,
                error: action.payload,
                status: FETCH_STATUSES.FAILURE,
            };
        }
        default:
            return state;
    }
};