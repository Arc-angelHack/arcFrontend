import * as types from '../../actionTypes/sos';

const initialState = {
    sosrequests: [],
    isLoading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.GET_ALL_SOSREQUESTS_START:
            return {
                ...state,
                isLoading: true
            };
        case types.GET_ALL_SOSREQUESTS_SUCCESS:
        const sosrequests = action.payload.map(sosrequest => {
            return {
                latitude: parseFloat(sosrequest.lat),
                longitude: parseFloat(sosrequest.long),
                description: sosrequest.description,
                finished: sosrequest.finished,
            }
        })
            return {
                ...state,
                sosrequests: sosrequests,
                isLoading: false
            };
        case types.GET_ALL_SOSREQUESTS_FAILED:
            return {
                ...state,
                isLoading: false
            };
        case types.CREATE_SOSREQUEST_START:
            return {
                ...state,
            };
        case types.CREATE_SOSREQUEST_SUCCESS:
            const sosrequest = {
                latitude: parseFloat(action.payload.lat),
                longitude: parseFloat(action.payload.long),
                description: action.payload.description,
                timestamp: action.payload.created_at,
                finished: action.payload.finished,
            };
            return {
                ...state,
                sosrequests: [...state.sosrequests, sosrequest]
            };
        case types.CREATE_SOSREQUEST_FAILED:
            return {
                ...state,
            };
        case types.UPDATE_SOSREQUEST_START:
            return {
                ...state,
            };
        case types.UPDATE_SOSREQUEST_SUCCESS:
            const filteredIncidents = state.sosrequests.filter(sosrequest => sosrequest.id !== action.payload.sosrequest.id);
            return {
                ...state,
                sosrequests: [...filteredIncidents, action.payload.sosrequest]
            };
        case types.UPDATE_SOSREQUEST_FAILED:
            return {
                ...state,
            };
        case types.DELETE_SOSREQUEST_START:
            return {
                ...state,
            };
        case types.DELETE_SOSREQUEST_SUCCESS:
            return {
                ...state,
                sosrequests: state.sosrequests.filter(sosrequest => sosrequest.id !== action.payload.sosrequest.id)
            };
        default:
            return state
        }
    }