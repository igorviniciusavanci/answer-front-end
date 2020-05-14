import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Question from '../pages/Question';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/questions/:id" component={Question} />
  </Switch>
);

export default Routes;
