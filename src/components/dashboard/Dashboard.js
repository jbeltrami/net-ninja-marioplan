import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    const { projects, auth, notifications } = this.props;
    // redirect goes here:
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.firestore.ordered.projects,
  notifications: state.firestore.ordered.notifications,
  auth: state.firebase.auth,
});

export default compose(
  firestoreConnect(() => [
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
  ]),
  connect(mapStateToProps)
)(Dashboard);

Dashboard.propTypes = {
  projects: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  notifications: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  auth: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
