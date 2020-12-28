import axios from 'axios';
import profile from '../async/profile';

const setHeaders = (obj) => {
  axios.defaults.headers.common = { ...axios.defaults.headers.common, ...obj }
}

const api = store => next => action => {
  next(action)

  let accessToken = store.getState().firebase.auth.stsTokenManager?.accessToken;
  let userId      = store.getState().firebase.profile.user_id;

  if(accessToken) setHeaders({ accesstoken: accessToken })
  if(userId)      setHeaders({ userid: userId })

  // GET ASYNC DATA
  if(accessToken && userId) {
    profile(store, store.getState().firebase.profile)
  }
}

export default api
