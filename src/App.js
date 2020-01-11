import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPasswordInit from './components/ForgotPasswordInit'
import ForgotPasswordComplete from './components/ForgotPasswordComplete';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Landing}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/register' exact component={Register}/>
      <Route path='/forgot-password-init' exact component={ForgotPasswordInit}/>
      <Route path='/forgot-password-complete' exact component={ForgotPasswordComplete}/>
      <Route path='**' component={Landing}/>
    </Switch>
  );
}

export default App;
