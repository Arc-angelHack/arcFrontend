import * as types from '../../actionTypes/app';

const initialState = {
    coords: null,
    isLoading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.GET_COORDS_START:
            return {
                ...state,
                isLoading: true
            };
        case types.GET_COORDS_SUCCESS:
            const coords = action.payload.coords;
            return {
                ...state,
                coords,
                isLoading: false
            };
        case types.GET_COORDS_FAILED:
            return {
                ...state,
                isLoading: false
            };
        default:
            return initialState
    }
}