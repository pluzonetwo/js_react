import {FETCH_STATUSES} from "../../Utils/constants";

export const poetSelector = state => state.poet.data;
export const isLoadingSelector = state => state.poet.status === FETCH_STATUSES.REQUEST;
export const errorSelect = state => state.poet.error;