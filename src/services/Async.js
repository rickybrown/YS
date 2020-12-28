import React from 'react';
import axios from 'axios';

let apiHost;

if(process.env.NODE_ENV === 'development') {
  apiHost = 'http://localhost:5001/amos-37/us-central1'
}
else {
  apiHost = 'https://us-central1-amos-37.cloudfunctions.net'
}

const endpoint = path => `${apiHost}/${path}`;

export default {
  get: (path, payload = {}) => {
    return axios.get(endpoint(path), payload)
  },
  put: (path, payload = {}) => {
    return axios.put(endpoint(path), payload.body, payload.config)
  },
  post: (path, payload = {}) => {
    return axios.post(endpoint(path), payload.body, payload.config)
  },
  patch: (path, payload = {}) => {
    return axios.patch(endpoint(path), payload.body, payload.config)
  },
  delete: (path, payload = {}) => {
    return axios.delete(endpoint(path), payload.body, payload.config)
  }
}
