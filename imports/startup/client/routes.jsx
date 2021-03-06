import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/App.jsx';
import { Index } from '../../ui/components/Index.jsx';

import { EventList } from '../../ui/pages/EventList.jsx';
import { Features } from '../../ui/pages/Features.jsx';
import { NotFound } from '../../ui/pages/NotFound.jsx';

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Index } />
      <Route path="/features" component={ Features } />
      <Route path="/react-data" component={ EventList } />
      <Route path="*" component={ NotFound } />
    </Route>
    </Router>,
    document.getElementById( 'react-root' )
  );
});
