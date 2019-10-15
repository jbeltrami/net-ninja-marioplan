export const signIn = creds => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password);
    await dispatch({ type: 'LOGIN_SUCCESS' });
  } catch (error) {
    await dispatch({ type: 'LOGIN_ERROR', payload: error });
  }
};
