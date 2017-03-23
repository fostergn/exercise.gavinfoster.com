import React, { Component } from 'react';
import '../../styles/styles.scss';
import Header from '../Header/HeaderContainer';
import Footer from '../Footer/FooterContainer';

const App = ({children, location}) => {
  return (
    <div>
      <Header location={location} />
      <div style={{paddingTop: 64}}>
        {children}
      </div>
    </div>
  );
}

export default App;
