const uploadReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_UPLOAD':
      console.log('created upload');
      return state;
    case 'CREATE_UPLOAD_ERROR':
      console.log('upload failed: ', action.payload);
      return state;
    default:
      return state;
  }
};

export default uploadReducer;
