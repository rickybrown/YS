import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase'
import Loader from 'components/Loader';

function AuthLoader() {
  const auth = useSelector(state => state.firebase.auth)

  return (
    isLoaded(auth) ? '' : <Loader />
  )
}

export default AuthLoader;
