import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import './ProjectDetails.css';
import { deleteProject } from '../../store/actions/projectActions';

function ProjectDetails(props) {
  const { project, auth, handleDeleteProject, history } = props;
  console.log(props);

  if (!auth.uid) return <Redirect to="/" />;
  if (Object.keys(project).length > 1) {
    return (
      <div className="container project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <i
              className="material-icons top-right-corner"
              onClick={() => {
                handleDeleteProject(project);
                history.push('/');
              }}
              onKeyPress={() => {
                handleDeleteProject(project);
                history.push('/');
              }}
              role="button"
              tabIndex={0}
            >
              delete_forever
            </i>

            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by the {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
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
    project: { ...project, projId: id },
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => ({
  handleDeleteProject: project => {
    dispatch(deleteProject(project));
  },
});

export default compose(
  firestoreConnect(() => ['projects']),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProjectDetails);

ProjectDetails.propTypes = {
  project: PropTypes.object,
  auth: PropTypes.object,
  history: PropTypes.object,
  handleDeleteProject: PropTypes.func,
};
