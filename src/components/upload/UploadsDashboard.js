import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect, Link } from 'react-router-dom';
import UploadsList from './UploadsList';

const UploadsDashboard = props => {
  const { files, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m12">
          <UploadsList files={files} />
        </div>
        <div className="col s12">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">Upload new file</span>
            </div>

            <div className="card-action grey lighten-4 grey-text">
              <Link to="/newUpload">
                <div className="btn-floating btn-large waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  files: state.firestore.ordered.files,
  auth: state.firebase.auth,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: 'files',
      where: [['ownerId', '==', props.auth.uid || '']],
    },
  ])
)(UploadsDashboard);

UploadsDashboard.propTypes = {
  files: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  auth: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
