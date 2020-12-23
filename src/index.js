import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes.jsx';
// import App from './App.jsx';

render(
  <StrictMode>
    <Router>
      <Routes />
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
