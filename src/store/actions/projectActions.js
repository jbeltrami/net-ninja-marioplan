export const createProject = project => async (
  dispatch,
  getState,
  getFirebase
) => {
  await getFirebase()
    .firestore()
    .collection('projects')
    .add(project);

  try {
    dispatch({ type: 'CREATE_PROJECT', payload: project });
  } catch (error) {
    dispatch({ type: 'CREATE_PROJECT_ERROR', payload: error });
  }
};
