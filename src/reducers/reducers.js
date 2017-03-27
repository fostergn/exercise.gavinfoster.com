import {
    TOGGLE_SEARCH,
    UPDATE_SEARCH,
} from '../actions/actions';

const rootReducer = (state = {}, action) => {
    let previousView = '';
    switch (action.type) {
        case TOGGLE_SEARCH:
            return Object.assign({}, state, {
                isSearching: !state.isSearching,
            });
        case UPDATE_SEARCH:
            return Object.assign({}, state, {
                searchText: action.text,
            });
        default:
            return state;
    }
};

// Export Reducer
export default rootReducer;
