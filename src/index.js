import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App/App';
import Add from './components/Add/Add';
import List from './components/List/List';
import Single from './components/Single/Single';
import { configureStore } from './store';

// Initialize store
const store = configureStore();
const mountApp = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={List}/>
        <Route path="/add" component={Add} />
        <Route path="/contacts" component={List} />
        <Route path="/contacts/:id" component={Single} />
        <Route path="*" component={List} />>
      </Route>
    </Router>
  </Provider>,
  mountApp
);
