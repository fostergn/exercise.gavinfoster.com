import React from 'react';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';

const Header = ({ toggleSetting, location }) =>  {

  const isSearching = false
  const isSingle = location.pathname.includes('/contacts/')
  const title = isSingle ? 'Single' : (isSearching ? <TextField hintText="Search Contacts" /> : 'Contacts')
  const leftIcon = isSingle ? <i className="material-icons">arrow_back</i> : (isSearching ? <i className="material-icons">arrow_back</i> : <i className="material-icons">more_vert</i>)
  const rightIcon = isSearching ? '' : <i className="material-icons">search</i>

  const navClass = classNames({
    'header__nav': true,
    'header__nav--hidden': false
  });

  const leftIconTouch = () => {
    if(isSingle) { browserHistory.push('/contacts') }
    else { console.log('nothing'); }
  }

  return (
    <AppBar 
      iconElementLeft={leftIcon}
      iconElementRight={rightIcon}
      onLeftIconButtonTouchTap={() => leftIconTouch()}
      iconStyleLeft={{color:'#fff', marginTop:0, marginLeft:0, marginBottom:0, marginRight:20, display: 'flex', alignItems: 'center'}} 
      iconStyleRight={{color:'#fff', margin:0, display: 'flex', alignItems: 'center'}} 
      onRightIconButtonTouchTap={() => console.log('tapped')}
      title={title}
      style={{position:'fixed'}}
    />
  );
}

export default Header;
