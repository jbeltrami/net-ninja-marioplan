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
      .add({
        ownerId: loggedInUser,
        urlPath: fileUrl,
        fileName: file.name,
        createdAt: new Date(),
      });

    await dispatch({ type: 'CREATE_UPLOAD', payload: fileUrl });
  } catch (error) {
    await dispatch({ type: 'CREATE_UPLOAD_ERROR', payload: error });
  }
};
