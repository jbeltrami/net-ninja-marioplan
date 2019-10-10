import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignInAuth from './components/auth/SignInAuth';
import SignUpAuth from './components/auth/SignUpAuth';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignInAuth} />
          <Route path="/signup" component={SignUpAuth} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
