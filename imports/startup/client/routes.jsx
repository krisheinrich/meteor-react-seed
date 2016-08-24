import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/App.jsx';
import { Index } from '../../ui/components/Index.jsx';

import EventList from '../../ui/components/EventList.jsx';
import Features from '../../ui/components/Features.jsx';

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Index } />
      <Route path="/features" component={ Features } />
      <Route path="/react-data" component={ EventList } />
    </Route>
    </Router>,
    document.getElementById( 'react-root' )
  );
});
