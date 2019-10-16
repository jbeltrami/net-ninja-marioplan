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

export const signOut = () => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
    await dispatch({ type: 'SIGN_OUT_SUCCESS' });
  } catch (error) {
    await dispatch({ type: 'SIGN_OUT_FAIL' });
  }
};

export const signUp = newUser => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  try {
    const fbNewUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password);

    await firebase
      .firestore()
      .collection('users')
      .doc(fbNewUser.user.uid)
      .set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
      });

    await dispatch({ type: 'SIGNUP_SUCCESS' });
  } catch (error) {
    await dispatch({ type: 'SIGNUP_FAIL', payload: error });
  }
};
