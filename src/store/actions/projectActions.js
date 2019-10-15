export const createProject = project => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  // Async call to DB
  const firestore = await getFirestore();
  await firestore.collection('projects').add({
    ...project,
    authorFirstName: 'Net',
    authorLastName: 'Ninja',
    authorId: 12345,
    createdAt: new Date(),
  });
  try {
    await dispatch({ type: 'CREATE_PROJECT', payload: project });
  } catch (error) {
    await dispatch({ type: 'CREATE_PROJECT_ERROR', payload: error });
  }
};
