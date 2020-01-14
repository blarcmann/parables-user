import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import  Quiz from './components/Quiz';
import ParableDetails from './components/ParableDetails';
import SearchResults from './components/SearchResults';
import ForgotPasswordInit from './components/ForgotPasswordInit'
import ForgotPasswordComplete from './components/ForgotPasswordComplete';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Landing}/>
      <Route path='/login' component={Login}/>
      <Route path='/register'  component={Register}/>
      <Route path='/quiz'  component={Quiz}/>
      <Route path='/leaderboard'  component={Leaderboard}/>
      <Route path='/search' component={SearchResults}/>
      <Route path="/parable-details/:id" component={ParableDetails} />
      <Route path='/forgot-password-init'  component={ForgotPasswordInit}/>
      <Route path='/forgot-password-complete' component={ForgotPasswordComplete}/>
      <Route path='**' component={Landing}/>
    </Switch>
  );
}

export default App;
