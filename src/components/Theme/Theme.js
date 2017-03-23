import React from 'react';
import App from '../App/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Theme = ({children, location}) => {
  return (
    <MuiThemeProvider>
      <App children={children} location={location} />
    </MuiThemeProvider>
  );
}

export default Theme;
