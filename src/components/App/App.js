import React, { Component } from 'react';
import '../../styles/styles.scss';
import Header from '../Header/HeaderContainer';
import Footer from '../Footer/FooterContainer';

const App = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default App;
