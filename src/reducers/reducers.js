import {
    TOGGLE_SEARCH,
    TOGGLE_EDIT,
    UPDATE_SEARCH,
    POST_ADD_REQUEST,
    RECEIVE_ADD_RESPONSE,
    GET_CONTACTS_REQUEST,
    RECEIVE_CONTACTS,
    RECEIVE_UPDATED_CONTACT,
    RECEIVE_DELETE_CONTACT
} from '../actions/actions';

const rootReducer = ( state = {}, action ) => {
	let previousView = '';
	switch ( action.type ) {
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
			contacts: [ ...state.contacts, action.contact ]
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
	case RECEIVE_UPDATED_CONTACT:
		const { id } = action.contact
		index = state.contacts.findIndex( contact => contact.id === id )
		return Object.assign({}, state, {
			updatingContact: false,
			isEditing: false,
			contacts: [
				...state.contacts.slice( 0, index ),
				action.contact,
				...state.contacts.slice( index + 1 )
			]
		});
	case RECEIVE_DELETE_CONTACT:
		return Object.assign({}, state, {
			contacts: state.contacts.filter( contact => contact.id !== action.id )
		});
	default:
		return state;
	}
};

// Export Reducer
export default rootReducer;
