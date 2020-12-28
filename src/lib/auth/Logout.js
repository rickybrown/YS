import React from "react";
import { useFirebase } from 'react-redux-firebase'

function Logout(props) {
  const firebase = useFirebase();

  const logout = () => {
    console.log('LOGOUT CLICKED')
    
    firebase.logout()
    .then(resp => {
      console.log(resp)
    })
    .catch(error => {
      console.error(error)
    })
  }
  return (
    <span className="component-logout" onClick={logout}>
      {props.label || 'Logout'}
    </span>
  );
};

export default Logout;
