import React from 'react';
import App from '../App/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Theme = ({children}) => {
  return (
    <MuiThemeProvider>
      <App children={children} />
    </MuiThemeProvider>
  );
}

export default Theme;
