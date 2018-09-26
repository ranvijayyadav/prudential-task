import { GET_WEATHER } from "../constants";

const initialState = {
    loading: false,
    loaded: false,
    data: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case `${GET_WEATHER}_REQUEST`: {
            return { ...state, loading: true };
        }

        case GET_WEATHER: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload
            };
        }

        case `${GET_WEATHER}_FAILURE`: {
            return { ...state, loading: true, loaded: false };
        }

        default:
            return { ...state };
    }
};
