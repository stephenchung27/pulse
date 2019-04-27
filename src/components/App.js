import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard';
import Today from './today/today';
import Report from './report/report';

function App() {
  return (
      < Switch>
        <Route exact path='/' component={Splash} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/today' component={Today} />
        <Route exact path='/report' component={Report} />
      </Switch>
  );
}

export default App;
