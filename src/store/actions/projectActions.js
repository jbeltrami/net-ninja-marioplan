export const createProject = project => async (
  dispatch,
  getState,
  getFirebase
) => {
  try {
    await getFirebase()
      .firestore()
      .collection('projects')
      .add({
        ...project,
        authorId: 12345,
        authorFirstName: 'Net',
        authorLastName: 'Ninja',
        createdAt: new Date(),
      });
    await dispatch({ type: 'CREATE_PROJECT', payload: project });
  } catch (error) {
    await dispatch({ type: 'CREATE_PROJECT_ERROR', payload: error });
  }
};
