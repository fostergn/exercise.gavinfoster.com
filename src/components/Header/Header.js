import React from 'react';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router'
import TextField from 'material-ui/TextField'
import contacts from '../../../test-contacts'

const Header = ({ toggleSearch, location, isSearching, updateSearch, searchText }) =>  {

  const isSingle = location.pathname.includes('/contacts/')
  const isAdd = location.pathname.includes('/add')
  const singleId = isSingle ? location.pathname.replace('/contacts/', '') : ''
  const singleContact = isSingle ? contacts.find(contact => contact.id === parseInt(singleId)) : ''

  const hiddenIcon = <i className="material-icons" style={{color:'transparent'}}>arrow_back</i>
  const arrowBackIcon = <i className="material-icons">arrow_back</i>
  const moreVertIcon = <i className="material-icons">more_vert</i>
  const searchIcon = <i className="material-icons">search</i>
  const textField = <TextField hintText="Search Contacts" value={searchText} inputStyle={{color:'#fff'}} onChange={e => updateSearch(e.target.value)} />

  const title = isSingle ? `${singleContact.firstName} ${singleContact.lastName}` : (isSearching ? textField : 'Contacts')
  const leftIcon = (isSingle || isAdd || isSearching)  ? arrowBackIcon : hiddenIcon
  const rightIcon = (isSearching || isSingle || isAdd) ? hiddenIcon : searchIcon

  const leftIconTouch = () => {
    if(isSingle || isAdd) { browserHistory.push('/contacts') }
    else { toggleSearch() }
  }

  return (
    <AppBar 
      iconElementLeft={leftIcon}
      iconElementRight={rightIcon}
      onLeftIconButtonTouchTap={() => leftIconTouch()}
      iconStyleLeft={{color:'#fff', marginTop:0, marginLeft:0, marginBottom:0, marginRight:20, display: 'flex', alignItems: 'center'}} 
      iconStyleRight={{color:'#fff', margin:0, display: 'flex', alignItems: 'center'}} 
      onRightIconButtonTouchTap={() => toggleSearch()}
      title={title}
      style={{position:'fixed'}}
    />
  );
}

export default Header;
