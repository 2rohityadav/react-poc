import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About.jsx';
import App from './App.jsx';
import { config } from './constants';


const Routes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route component={App} path={config.url.BASE_PATH} exact />
        <Route component={About} path="/about" exact />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
