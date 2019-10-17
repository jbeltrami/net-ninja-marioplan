import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { createUpload } from '../../store/actions/uploadActions';

class ImageUpload extends Component {
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  onUpload = async () => {
    const { image } = this.state;
    const { handleUpload } = this.props;

    handleUpload(image);
  };

  render() {
    const { auth, uploads } = this.props;

    if (!auth.uid) return <Redirect to="/" />;

    return (
      <div className="container upload-form white">
        <div className="row">
          <div className="col s6">
            <div className="input-field">
              <input type="file" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button
                className="btn waves-effect waves-light"
                type="button"
                onClick={this.onUpload}
              >
                Upload
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>

          <div className="col s6">
            <img
              src={uploads.recentUpload || 'http://via.placeholder.com/400x300'}
              alt="Uploaded images"
              height="300"
              width="400"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  uploads: state.uploads,
});

const mapDispatchToProps = dispatch => ({
  handleUpload: file => {
    dispatch(createUpload(file));
  },
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [
    {
      collection: 'files',
      where: [['ownerId', '==', props.auth.uid || '']],
    },
  ])
)(ImageUpload);

ImageUpload.propTypes = {
  handleUpload: PropTypes.func,
  auth: PropTypes.object,
  uploads: PropTypes.object,
};
