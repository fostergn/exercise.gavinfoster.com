import React from 'react';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';

const Header = ({ toggleSearch, location, isSearching }) =>  {

  const isSingle = location.pathname.includes('/contacts/')
  const isAdd = location.pathname.includes('/add')

  const arrowBackIcon = <i className="material-icons">arrow_back</i>
  const moreVertIcon = <i className="material-icons">more_vert</i>
  const textField = <TextField hintText="Search Contacts" inputStyle={{color:'#fff'}} />

  const title = isSingle ? 'Single' : (isSearching ? textField : 'Contacts')
  const leftIcon = (isSingle || isAdd)  ? arrowBackIcon : (isSearching ? arrowBackIcon : moreVertIcon)
  const rightIcon = (isSearching || isSingle || isAdd) ? <div></div> : <i className="material-icons">search</i>

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
