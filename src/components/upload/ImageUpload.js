import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { storage } from '../../config/fbConfig';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0,
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        // progrss function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
  };

  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    };

    const { progress, url } = this.state;

    return (
      <div style={style}>
        <progress value={progress} max="100" />
        <br />
        <input type="file" onChange={this.handleChange} />
        <button type="button" onClick={this.handleUpload}>
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

// const mapStateToProps = state => ({ fbStorage: state.storage });
export default ImageUpload;
// export default connect(mapStateToProps)(ImageUpload);

// ImageUpload.propTypes = {
//   fbStorage: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
// };
