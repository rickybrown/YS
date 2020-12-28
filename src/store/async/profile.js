import React from 'react';
import Async from 'services/Async';

export default (store, user) => {
  let PROFILE = store.getState().accessors['PROFILE']

  if(!PROFILE) {
    Async.get(`consumer/profile`)
    .then(resp => {
      store.dispatch({
        type: 'SET_PROFILE',
        data: { username: user.username, ...resp.data }
      })
    })
    .catch(error => console.error(error))
  }
}
