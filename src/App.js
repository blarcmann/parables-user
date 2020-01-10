import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Landing}/>
      <Route path='**' component={Landing}/>
    </Switch>
  );
}

export default App;
