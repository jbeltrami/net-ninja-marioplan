import React from 'react';
import PropTypes from 'prop-types';
// components
import UploadsSummary from './UploadsSummary';

const UploadsList = ({ files }) => {
  const buildFiles = items => {
    if (items)
      return items.map(file => <UploadsSummary file={file} key={file.id} />);
  };

  return (
    <div className="upload-list section">
      <div className="row">{buildFiles(files)}</div>
    </div>
  );
};

export default UploadsList;
UploadsList.propTypes = {
  files: PropTypes.array,
};
