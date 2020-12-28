import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { createFirestoreInstance } from 'redux-firestore';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default (store) => {
  return {
    firebase,
    config: {
      userProfile: "users",
      useFirestoreForProfile: true,
    },
    dispatch: store.dispatch,
    createFirestoreInstance
  }
};
