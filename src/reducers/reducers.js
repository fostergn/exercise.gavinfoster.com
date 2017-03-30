import {
    TOGGLE_SEARCH,
    TOGGLE_EDIT,
    UPDATE_SEARCH,
    POST_ADD_REQUEST,
    RECEIVE_ADD_RESPONSE,
    GET_CONTACTS_REQUEST,
    RECEIVE_CONTACTS,
} from '../actions/actions';

const rootReducer = (state = {}, action) => {
    let previousView = '';
    switch (action.type) {
        case TOGGLE_SEARCH:
            return Object.assign({}, state, {
                isSearching: !state.isSearching,
            });
        case TOGGLE_EDIT:
            return Object.assign({}, state, {
                isEditing: !state.isEditing,
            });
        case UPDATE_SEARCH:
            return Object.assign({}, state, {
                searchText: action.text,
            });
        case POST_ADD_REQUEST:
            return Object.assign({}, state, {
                addingContact: true
            });        
        case RECEIVE_ADD_RESPONSE:
            return Object.assign({}, state, {
                addingContact: false,
                contacts: [...state.contacts, action.response]
            });  
        case GET_CONTACTS_REQUEST:
            return Object.assign({}, state, {
                contactsIsFetching: true
            }); 
        case RECEIVE_CONTACTS:
            return Object.assign({}, state, {
                contactsFetched: true,
                contactsIsFetching: false,
                contacts: action.contacts,
            }); 
        default:
            return state;
    }
};

// Export Reducer
export default rootReducer;
