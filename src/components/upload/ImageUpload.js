import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { createUpload } from '../../store/actions/uploadActions';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
    };
  }

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
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    };

    const { url } = this.state;
    const { auth, uploads } = this.props;

    if (!auth.uid) return <Redirect to="/" />;

    if (uploads && uploads.length >= 1) console.log('uploads', uploads);
    return (
      <div style={style}>
        <br />
        <input type="file" onChange={this.handleChange} />
        <button type="button" onClick={this.onUpload}>
          Upload
        </button>
        <br />
        <img
          src={url || 'http://via.placeholder.com/400x300'}
          alt="Uploaded images"
          height="300"
          width="400"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  uploads: state.firestore.ordered.files,
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
  uploads: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.bool,
  ]),
};
