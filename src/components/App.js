import React from 'react';
import { Route, Switch } from "react-router-dom";
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard';
import Today from './today/today';
import Report from './report/report';
import Calendar from './calendar/calendar';
import Footer from './footer';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/today' component={Today} />
        <Route exact path='/report' component={Report} />
        <Route exact path='/calendar' component={Calendar} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
