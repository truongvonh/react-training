import React from 'react';
import { Switch } from 'react-router'
import routes from './routers/config';
import RouteWithSubRoutes from './routers/renderRoutes';
import HeaderNav from './components/HeaderNav'
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderNav />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
