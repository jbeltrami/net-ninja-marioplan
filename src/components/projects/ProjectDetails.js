import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

function ProjectDetails(props) {
  const { project, auth } = props;

  if (!auth.uid) return <Redirect to="/" />;
  if (project) {
    return (
      <div className="container project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by the {project.authorFirstName} {project.authorLastName}
            </div>
            <div>2nd of September, 2AM</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container center">
      <p>Loading project...</p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { projects } = state.firestore.data;
  const project = projects ? projects[id] : null;
  return {
    project,
    auth: state.firebase.auth,
  };
};

export default compose(
  firestoreConnect(() => ['projects']),
  connect(mapStateToProps)
)(ProjectDetails);

ProjectDetails.propTypes = {
  project: PropTypes.object,
  auth: PropTypes.object,
};
