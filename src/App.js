import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';
import SignInAuth from './components/auth/SignInAuth';
import SignUpAuth from './components/auth/SignUpAuth';
import ImageUpload from './components/upload/ImageUpload';

function App(props) {
  const { auth } = props;
  if (auth.isLoaded)
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignInAuth} />
            <Route path="/signup" component={SignUpAuth} />
            <Route path="/create" component={CreateProject} />
            <Route path="/upload" component={ImageUpload} />
          </Switch>
        </div>
      </BrowserRouter>
    );

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(App);
App.propTypes = {
  auth: PropTypes.object,
};
