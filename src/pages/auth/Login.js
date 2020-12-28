import {
  GoogleLoginButton,
  FacebookLoginButton,
  TwitterLoginButton,
  LinkedInLoginButton
} from 'react-social-login-buttons';

import './Login.css';
import { useFirebase, isLoaded } from 'react-redux-firebase';
import { Button } from '@material-ui/core';

const Login = () => {
  const firebase = useFirebase();

  const signIn = (provider) => {
    firebase.login({
      provider,
      type: 'popup',
      scopes: ['email'] // not required
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className="login">
      Sign into the stuff!

      <div className="auth-buttons">
        <GoogleLoginButton   onClick={() => signIn('google')} />
        <FacebookLoginButton onClick={() => signIn('facebook')} />
        <TwitterLoginButton  onClick={() => signIn('twitter')} />
        <LinkedInLoginButton onClick={() => signIn('linkedin')} />
      </div>
    </div>
  )
}

export default Login;
