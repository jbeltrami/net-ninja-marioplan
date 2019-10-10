export const createProject = project => (dispatch, getState) => {
  // Async call to DB
  dispatch({ type: 'CREATE_PROJECT', project });
};
