import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import history from './history';
import Main from '../pages/Main';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';
import Private from './private';
import Guest from './guest';
import Upload from '../pages/Upload';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
      <Private path="/files" component={Upload} />
      <Private path="/" component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
