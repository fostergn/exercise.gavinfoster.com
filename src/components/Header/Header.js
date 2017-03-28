import React from 'react';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router'
import TextField from 'material-ui/TextField'
import contacts from '../../../test-contacts'
import RightIcon from './RightIcon'

const Header = ({ toggleSearch, location, isSearching, updateSearch, searchText, isEditing, toggleEdit }) =>  {

  const isSingle = location.pathname.includes('/contacts/')
  const isAdd = location.pathname.includes('/add')
  const singleId = isSingle ? location.pathname.replace('/contacts/', '') : ''
  const singleContact = isSingle ? contacts.find(contact => contact.id === parseInt(singleId)) : ''

  const hiddenIcon = <i className="material-icons" style={{color:'transparent'}}>arrow_back</i>
  const arrowBackIcon = <i className="material-icons">arrow_back</i>
  const moreVertIcon = <i className="material-icons">more_vert</i>
  const searchIcon = <i className="material-icons">search</i>
  const pencilIcon = <i className="material-icons">mode_edit</i>
  const cancelAndSave = <div><i className="material-icons">cancel</i><i style={{paddingLeft:20}} onClick={() => saveEdits()} className="material-icons">save</i></div>
  const textField = <TextField hintText="Search Contacts" value={searchText} inputStyle={{color:'#fff'}} onChange={e => updateSearch(e.target.value)} />

  const title = isSingle ? `${singleContact.firstName} ${singleContact.lastName}` : (isSearching ? textField : ( isAdd ? 'Add Contact' : 'Contacts'))
  const leftIcon = (isSingle || isAdd || isSearching)  ? arrowBackIcon : hiddenIcon
  const rightIcon = (isSearching || isAdd) ? hiddenIcon : isSingle ? (isEditing ? cancelAndSave : pencilIcon) : searchIcon

  const saveEdits = () => {
    console.log('save edits')
  }

  const leftIconTouch = () => {
    if (isSingle || isAdd) { browserHistory.push('/contacts') }
    else { toggleSearch() }
  }

  const rightIconTouch = () => {
    if (isSingle) {
      toggleEdit()
    } else {
      toggleSearch()
    }
  }

  return (
    <AppBar 
      iconElementLeft={leftIcon}
      iconElementRight={<RightIcon location={location} toggleEdit={toggleEdit} saveEdits={saveEdits} isSearching={isSearching} isEditing={isEditing} />}
      onLeftIconButtonTouchTap={() => leftIconTouch()}
      iconStyleLeft={{color:'#fff', marginTop:0, marginLeft:0, marginBottom:0, marginRight:20, display: 'flex', alignItems: 'center'}} 
      iconStyleRight={{color:'#fff', margin:0, display: 'flex', alignItems: 'center'}} 
      title={title}
      style={{position:'fixed'}}
    />
  );
}

export default Header;
