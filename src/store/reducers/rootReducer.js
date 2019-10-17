import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import uploadReducer from './uploadReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  uploads: uploadReducer,
});

export default rootReducer;
