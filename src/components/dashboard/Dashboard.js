import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.firestore.ordered.projects,
});

export default compose(
  firestoreConnect([{ collection: 'projects' }]),
  connect(mapStateToProps)
)(Dashboard);

Dashboard.propTypes = {
  projects: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
