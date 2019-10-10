export const createProject = project => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  // Async call to DB
  dispatch({ type: 'CREATE_PROJECT', project });
};
