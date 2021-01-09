import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About.jsx';
import App from './App.jsx';
import { envConfig } from './constants';


const Routes = () => {
  // console.log('New Base URL:-', process.env.BASE_URL)
  console.log('config-url', envConfig.url.BASE_PATH)
  console.log('config-url_baseURL', envConfig.url.BASE_URL)
  const URL = `${envConfig.url.BASE_PATH}`
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route component={App} path={URL} exact />
        <Route component={About} path="/about" exact />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
