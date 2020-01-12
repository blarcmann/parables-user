import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import  Quiz from './components/Quiz';
import SearchResults from './components/SearchResults';
import ForgotPasswordInit from './components/ForgotPasswordInit'
import ForgotPasswordComplete from './components/ForgotPasswordComplete';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Landing}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/register' exact component={Register}/>
      <Route path='/quiz' exact component={Quiz}/>
      <Route path='/search' exact component={SearchResults}/>
      <Route path='/forgot-password-init' exact component={ForgotPasswordInit}/>
      <Route path='/forgot-password-complete' exact component={ForgotPasswordComplete}/>
      <Route path='**' component={Landing}/>
    </Switch>
  );
}

export default App;
