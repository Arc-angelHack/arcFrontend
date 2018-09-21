import * as types from '../../actionTypes/requests';

const initialState = {
    requests: [],
    isLoading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.GET_ALL_REQUESTS_START:
            return {
                ...state,
                isLoading: true
            };
        case types.GET_ALL_REQUESTS_SUCCESS:
            return {
                ...state,
                requests: action.payload.requests,
                isLoading: false
            };
        case types.GET_ALL_REQUESTS_FAILED:
            return {
                ...state,
                isLoading: false
            };
        case types.CREATE_REQUEST_START:
            return {
                ...state,
            };
        case types.CREATE_REQUEST_SUCCESS:
            return {
                ...state,
                requests: [...state.requests, action.payload.request]
            };
        case types.CREATE_REQUEST_FAILED:
            return {
                ...state,
            };
        case types.UPDATE_REQUEST_START:
            return {
                ...state,
            };
        case types.UPDATE_REQUEST_SUCCESS:
            const filteredRequests = state.requests.filter(request => request.id !== action.payload.request.id);
            return {
                ...state,
                requests: [...filteredRequests, action.payload.request]
            };
        case types.UPDATE_REQUEST_FAILED:
            return {
                ...state,
            };
        case types.DELETE_REQUEST_START:
            return {
                ...state,
            };
        case types.DELETE_REQUEST_SUCCESS:
            return {
                ...state,
                requests: state.requests.filter(request => request.id !== action.payload.request.id)
            };
        default:
            return initialState
    }
}