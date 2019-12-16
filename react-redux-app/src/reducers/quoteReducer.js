import{FETCH_QUOTE_START,FETCH_QUOTE_SUCCESS,FETCH_QUOTE_FAILURE} from "../actions";

const initialState = {
    quote: {},
    isFetching: false,
    error: ''
};

 const reducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTE_START:
            return {
                ...state,
                isFetching: true,
            };
            case FETCH_QUOTE_SUCCESS: 
            return {
                ...state,
                quote: action.payload,
                isFetching: false,
                error: ''
                // ' ' to clear out our error
            };
            case FETCH_QUOTE_FAILURE:
                return {
                    ...state, 
                    // if there is an error, we want to inform the user we are not fetching any data anymore and that there is an error.
                    isFetching: false,
                    error: action.payload

                }

        default: 
        return state;
    }
};

export default reducer;