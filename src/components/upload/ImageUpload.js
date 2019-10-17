import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { storage } from '../../config/fbConfig';
import { createUpload } from '../../store/actions/uploadActions';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0,
      message: '',
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

    const { progress, url, message } = this.state;

    return (
      <div style={style}>
        <progress value={progress} max="100" />
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

        {message ? <p>{message}</p> : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleUpload: file => {
    dispatch(createUpload(file));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(ImageUpload);

ImageUpload.propTypes = {
  handleUpload: PropTypes.func,
};
