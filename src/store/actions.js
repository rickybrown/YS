import Async from 'services/Async';

export const set = (name, data) => ({
  type: `SET_${name}`,
  data
})

export const get = (name, data) => {
  return dispatch => {
    return Async.get(data.endpoint, data.payload)
    .then(resp => dispatch(set(name, data)))
    .catch(err => console.error(err))
  }
}
