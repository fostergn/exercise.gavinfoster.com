import React from 'react';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';

const Header = ({ toggleSetting }) =>  {

  const navClass = classNames({
    'header__nav': true,
    'header__nav--hidden': false
  });

  const navigateHome = (e) => {
    e.preventDefault();
    console.log('click');
  }

  return (
    <AppBar 
      iconElementRight={<i className="material-icons">search</i>}
      iconStyleRight={{color:'#fff', margin:0, display: 'flex', alignItems: 'center'}} 
      onRightIconButtonTouchTap={() => console.log('tapped')}
      title='Contacts'
    />
  );
}

export default Header;
