const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return { ...state, authError: 'Login Failed' };
    case 'LOGIN_SUCCESS':
      console.log('signIn success');
      return { ...state, authError: null };
    case 'SIGN_OUT_SUCCESS':
      console.log('signOut success');
      return state;
    default:
      return state;
  }
};

export default authReducer;
