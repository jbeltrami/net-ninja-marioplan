import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/fbConfig';
import App from './App';
// Styles
import './index.css';
// Redux
import rootReducer from './store/reducers/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      // withExtraArguments gives me the ability to call extra arguments inside my actions. getFirebase and getFirestore are now available in all actions.
      thunk.withExtraArgument({
        getFirebase,
        getFirestore,
      })
    ),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
