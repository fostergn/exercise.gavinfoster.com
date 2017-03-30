import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router'

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
export const UPDATE_CONTACT_REQUEST = 'UPDATE_CONTACT_REQUEST'
export const RECEIVE_UPDATED_CONTACT = 'RECEIVE_UPDATED_CONTACT'
export const RECEIVE_DELETE_CONTACT = 'RECEIVE_DELETE_CONTACT'
export const DELETE_CONTACT_REQUEST = 'DELETE_CONTACT_REQUEST'

const baseUrl = 'http://45.55.86.244'

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
  return {
    type: POST_ADD_REQUEST,
  }
}

export function receiveAddContact(contact){
  return {
    type: RECEIVE_ADD_RESPONSE,
    contact
  }
}

export function receiveAddResponse(response){
  return function(dispatch){
    dispatch(receiveAddContact(response))
    browserHistory.push(`/contacts/${response.id}`)
  }
}

export function addContact(contact) {
  return function(dispatch) {
    dispatch(postAddRequest(contact))

    return fetch(`${baseUrl}/api/contacts/`, {
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
  return function(dispatch) {
    dispatch(getContactsRequest())
    return fetch(`${baseUrl}/api/contacts/`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveContacts(json))
      )
   }  
}

export function updateContactRequest(){
  return {
    type: UPDATE_CONTACT_REQUEST,
  }
}

export function receiveUpdatedContact(contact){
  return {
    type: RECEIVE_UPDATED_CONTACT,
    contact
  }
}

export function updateContact(contact) {
  return function(dispatch) {
    dispatch(updateContactRequest())
    return fetch(`${baseUrl}/api/contacts/${contact.id}`, {
      method: 'PUT',
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
        dispatch(receiveUpdatedContact(json))
      )

  }   
}

export function deleteContactRequest(){
  return {
    type: DELETE_CONTACT_REQUEST,
  }
}

export function receiveDeleteContact(id){
  return {
    type: RECEIVE_DELETE_CONTACT,
    id
  }
}

export function receiveDeleteResponse(response){
  browserHistory.push(`/contacts`)
  return function(dispatch){
    dispatch(receiveDeleteContact(response))
  }
}

export function deleteContact(id) {
  return function(dispatch) {
    dispatch(deleteContactRequest())
    return fetch(`${baseUrl}/api/contacts/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(json =>
        dispatch(receiveDeleteResponse(json.id))
      )

  }   
}
