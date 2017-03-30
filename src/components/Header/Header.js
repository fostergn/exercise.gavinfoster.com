import React from 'react';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router'
import TextField from 'material-ui/TextField'
// import contacts from '../../../test-contacts'
import RightIcon from './RightIcon'
import LeftIcon from './LeftIcon'

const Header = ({ contacts, toggleSearch, location, isSearching, updateSearch, searchText, isEditing, toggleEdit, addContact, updateContact }) =>  {

  const isSingle = location.pathname.includes('/contacts/')
  const isAdd = location.pathname.includes('/add')
  const singleId = isSingle ? location.pathname.replace('/contacts/', '') : ''
  const singleContact = isSingle ? contacts.find(contact => contact.id === singleId) : ''

  const textField = <TextField hintText="Search Contacts" value={searchText} inputStyle={{color:'#fff'}} onChange={e => updateSearch(e.target.value)} />
  const title = isSingle && (typeof singleContact !== 'undefined') ? `${singleContact.firstName} ${singleContact.lastName}` : (isSearching && !isAdd ? textField : ( isAdd ? 'Add Contact' : 'Contacts'))

  const saveEdits = () => {
    const contact = {
      id: singleId,
      firstName: document.getElementById('first-name-input').value,
      lastName: document.getElementById('last-name-input').value,
      // only numbers for phone (strip formatting)
      phone: document.getElementById('phone-input').value.replace(/\D/g,''),
      email: document.getElementById('email-input').value,
    }
    updateContact(contact)
  }

  return (
    <AppBar 
      iconElementLeft={<LeftIcon 
                          updateSearch={updateSearch} 
                          toggleSearch={toggleSearch} 
                          isSingle={isSingle} 
                          isAdd={isAdd} 
                          isSearching={isSearching} 
                        />}
      iconElementRight={<RightIcon 
                          toggleSearch={toggleSearch} 
                          location={location} 
                          addContact={addContact} 
                          toggleEdit={toggleEdit} 
                          saveEdits={saveEdits} 
                          isSearching={isSearching} 
                          isEditing={isEditing} 
                        />}
      iconStyleLeft={{color:'#fff', marginTop:0, marginLeft:0, marginBottom:0, marginRight:20, display: 'flex', alignItems: 'center'}} 
      iconStyleRight={{color:'#fff', margin:0, display: 'flex', alignItems: 'center'}} 
      title={title}
      style={{position:'fixed'}}
    />
  );
}

export default Header;
