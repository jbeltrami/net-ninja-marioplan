export const createProject = project => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  // Async call to DB
  const firestore = getFirestore();
  firestore
    .collection('projects')
    .add({
      ...project,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date(),
    })
    .then(() => {
      dispatch({ type: 'CREATE_PROJECT', payload: project });
    })
    .catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', payload: err });
    });
};
