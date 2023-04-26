import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
function Login(props) {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>welcome to Nitesh ChatApp!</h2>
        <div className="login-button google">
          <GoogleOutlined /> Sign In with Google
        </div>
        <br />
        <br />
        <div className="login-button facebook">
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
