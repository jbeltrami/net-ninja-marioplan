export const createUpload = file => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  const storage = firebase.storage();
  const loggedInUser = getState().firebase.auth.uid;

  try {
    await storage.ref(`images/${file.name.replace(' ', '-')}`).put(file);
    const fileUrl = await storage
      .ref('images')
      .child(file.name.replace(' ', '-'))
      .getDownloadURL();

    await firebase
      .firestore()
      .collection('files')
      .doc(file.name.replace(' ', '-'))
      .set({
        ownerId: loggedInUser,
        urlPath: fileUrl,
        fileName: file.name,
      });

    await dispatch({ type: 'CREATE_UPLOAD' });
  } catch (error) {
    await dispatch({ type: 'CREATE_UPLOAD_ERROR', payload: error });
  }
};
