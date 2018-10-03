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
            const requests = action.payload.map(request => {
                return {
                    latitude: parseFloat(request.latitude),
                    longitude: parseFloat(request.longitude),
                    description: request.description,
                    status: 'In Progress',
                    askFood: request.ask_food,
                    askWater: request.ask_water,
                    askMedical: request.ask_medical,
                    askShelter: request.ask_shelter,
                    timestamp: request.created_at,
                }
            });
            return {
                ...state,
                requests,
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
            const request = {
                latitude: parseFloat(action.payload.latitude),
                longitude: parseFloat(action.payload.longitude),
                description: action.payload.description,
                status: 'In Progress',
                askFood: action.payload.ask_food,
                askWater: action.payload.ask_water,
                askMedical: action.payload.ask_medical,
                askShelter: action.payload.ask_shelter,
                timestamp: action.payload.created_at,
            };
            return {
                ...state,
                requests: [...state.requests, request]
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
            return state
    }
}