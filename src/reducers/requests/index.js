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
                    latitude: parseFloat(request.lat),
                    longitude: parseFloat(request.long),
                    description: request.description,
                    peopleCount: request.people_count,
                    askFood: request.food,
                    askWater: request.water,
                    askMedical: request.medical,
                    askShelter: request.shelter,
                    askOther: request.other,
                    finished: request.finished,
                    offer: request.is_an_offer,
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
                latitude: parseFloat(action.payload.request.latitude),
                longitude: parseFloat(action.payload.request.longitude),
                description: action.payload.request.description,
                status: 'In Progress',
                askFood: action.payload.request.ask_food,
                askWater: action.payload.request.ask_water,
                askMedical: action.payload.request.ask_medical,
                askShelter: action.payload.request.ask_shelter,
                timestamp: action.payload.request.created_at,
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