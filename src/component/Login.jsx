import React from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { auth } from "../firebase";

function Login(props) {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>welcome to Nitesh ChatApp!</h2>
        <div
          className="login-button google"
          onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <br />
        <br />
        <div
          className="login-button facebook"
          onClick={() => signInWithRedirect(auth, new FacebookAuthProvider())}
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
