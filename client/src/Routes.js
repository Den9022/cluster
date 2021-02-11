import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Results from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={App} />
    <Route path="/result" component={Results} />
  </Route>
);