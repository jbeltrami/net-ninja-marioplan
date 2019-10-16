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
    case 'SIGNUP_SUCCESS':
      console.log('signUp success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNUP_FAIL':
      console.log('signUp Fail', action.payload.message);
      return {
        ...state,
        authError: action.payload.message,
      };
    default:
      return state;
  }
};

export default authReducer;
