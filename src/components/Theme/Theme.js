import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../App/App';

const Theme = ({ children, location }) => (
  <MuiThemeProvider>
    <App location={location}>
      { children }
    </App>
  </MuiThemeProvider>
);

export default Theme;
