import React from 'react';
import PropTypes from 'prop-types';
import './UploadSummary.css';

const UploadsSummary = ({ file }) => (
  <a
    href={file.urlPath}
    key={file.id}
    download
    target="_blank"
    rel="noopener noreferrer"
    className="col s8"
  >
    <div className="card">
      <div className="card-image">
        <img
          className="responsive-img card-preview"
          src={file.urlPath}
          alt={`${file.fileName} preview`}
        />
        <span className="card-title">{file.fileName}</span>
      </div>

      <div className="card-action">
        Download{' '}
        <i className="material-icons top-right-corner">file_download</i>
      </div>
    </div>
  </a>
);

export default UploadsSummary;
UploadsSummary.propTypes = {
  file: PropTypes.object,
};
