export const createProject = project => async (
  dispatch,
  getState,
  getFirebase
) => {
  const { profile } = getState().firebase;
  const authorId = getState().firebase.auth.uid;

  try {
    await getFirebase()
      .firestore()
      .collection('projects')
      .add({
        ...project,
        authorId,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        createdAt: new Date(),
      });
    await dispatch({ type: 'CREATE_PROJECT', payload: project });
  } catch (error) {
    await dispatch({ type: 'CREATE_PROJECT_ERROR', payload: error });
  }
};

export const deleteProject = project => async (
  dispatch,
  getState,
  getFirebase
) => {
  try {
    await getFirebase()
      .firestore()
      .collection('projects')
      .doc(project.projId.toString())
      .delete();

    await dispatch({ type: 'DELETE_PROJECT', payload: project });
  } catch (error) {
    await dispatch({ type: 'DELETE_PROJECT_ERROR', payload: error });
  }
};
