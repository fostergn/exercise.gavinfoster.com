import fetch from 'isomorphic-fetch'

export const TOGGLE_SEARCH = 'TOGGLE_SEARCH'
export const TOGGLE_EDIT = 'TOGGLE_EDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const UPDATE_SEARCH = 'UPDATE SEARCH'
export const ADD_CONTACT = 'ADD_CONTACT'
export const POST_ADD_REQUEST = 'POST_ADD_REQUEST'
export const RECEIVE_ADD_RESPONSE = 'RECEIVE_ADD_RESPONSE'
export const GET_CONTACTS_REQUEST = 'GET_CONTACTS_REQUEST'
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS'

export function toggleSearch() {
    return {
        type: TOGGLE_SEARCH,
    }
}

export function toggleEdit() {
    return {
        type: TOGGLE_EDIT,
    }
}

export function updateSearch(text) {
  return {
    type: UPDATE_SEARCH,
    text
  }
}

function requestPosts(category) {
  return {
    type: REQUEST_POSTS,
    category
  }
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts: posts.data.children.map(child => child.data),
  }
}

export function postAddRequest(contact){
  console.log('sent request to the server ', contact);
  return {
    type: POST_ADD_REQUEST,
  }
}

export function receiveAddResponse(response){
  return {
    type: RECEIVE_ADD_RESPONSE,
    response
  }
}

export function addContact(contact) {
  return function(dispatch) {
    dispatch(postAddRequest(contact))

    return fetch(`http://localhost:7000/api/contacts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone,
        email: contact.email
      })
    })
      .then(response => response.json())
      .then(json =>
        dispatch(receiveAddResponse(json))
      )

  }
}

export function getContactsRequest(){
  return {
    type: GET_CONTACTS_REQUEST,
  }
}

export function receiveContacts(contacts){
  return {
    type: RECEIVE_CONTACTS,
    contacts
  }
}

export function fetchContacts() {
  console.log('fetching contacts action')
  return function(dispatch) {
    dispatch(getContactsRequest())
    return fetch(`http://localhost:7000/api/contacts/`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveContacts(json))
      )
   }  
}


export function fetchPosts(category) {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestPosts(category))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://www.gavinfoster.com/api/v2/${category}.json`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receivePosts(json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}
