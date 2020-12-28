import { combineReducers } from 'redux';
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import accessors from './accessors';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  accessors
})
