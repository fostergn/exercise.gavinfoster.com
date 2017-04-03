import React from 'react';
import '../../styles/styles.scss';
import Header from '../Header/HeaderContainer';

const App = ({ children, location }) => (
  <div>
    <Header location={location} />
    <div style={{ paddingTop: 64 }}>
      {children}
    </div>
  </div>
);

export default App;
