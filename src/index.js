import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import Theme from './components/Theme/Theme';
import Add from './components/Add/Add';
import List from './components/List/ListContainer';
import Single from './components/Single/SingleContainer';
import { configureStore } from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Initialize store
const store = configureStore();
const mountApp = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Theme}>
        <IndexRedirect to="contacts" />
        <Route path="/contacts" component={List} />
        <Route path="/add" component={Add} />
        <Route path="/contacts/:id" component={Single} />
        <Redirect from="*" to="contacts" />
      </Route>
    </Router>
  </Provider>,
  mountApp
);
