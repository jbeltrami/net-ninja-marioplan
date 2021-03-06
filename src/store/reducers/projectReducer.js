const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.payload);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.payload);
      return state;
    case 'DELETE_PROJECT':
      console.log('deleting project: ', action.payload);
      return state;
    case 'DELETE_PROJECT_ERROR':
      console.log('delete project error: ', action.payload);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
