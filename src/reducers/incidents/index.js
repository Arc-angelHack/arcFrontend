import * as types from '../../actionTypes/incidents';

const initialState = {
    incidents: [],
    isLoading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.GET_ALL_INCIDENTS_START:
            return {
                ...state,
                isLoading: true
            };
        case types.GET_ALL_INCIDENTS_SUCCESS:
            return {
                ...state,
                incidents: action.payload.incidents,
                isLoading: false
            };
        case types.GET_ALL_INCIDENTS_FAILED:
            return {
                ...state,
                isLoading: false
            };
        case types.CREATE_INCIDENT_START:
            return {
                ...state,
            };
        case types.CREATE_INCIDENT_SUCCESS:
            return {
                ...state,
                incidents: [...state.incidents, action.payload.incident]
            };
        case types.CREATE_INCIDENT_FAILED:
            return {
                ...state,
            };
        case types.UPDATE_INCIDENT_START:
            return {
                ...state,
            };
        case types.UPDATE_INCIDENT_SUCCESS:
            const filteredIncidents = state.incidents.filter(incident => incident.id !== action.payload.incident.id);
            return {
                ...state,
                incidents: [...filteredIncidents, action.payload.incident]
            };
        case types.UPDATE_INCIDENT_FAILED:
            return {
                ...state,
            };
        case types.DELETE_INCIDENT_START:
            return {
                ...state,
            };
        case types.DELETE_INCIDENT_SUCCESS:
            return {
                ...state,
                incidents: state.incidents.filter(incident => incident.id !== action.payload.incident.id)
            };
    }
}