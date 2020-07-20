/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../../../shared/hooks";
import LoginForm from "../../features/Login/LoginForm";

const Login = () => {
  const history = useHistory();

  const { login } = useAuth();

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
    } catch (e) {
      alert(e.message);
    }
  };

  const handleRegisterClick = () => {
    history.push("/register");
  };

  return (
    <div>
      <LoginForm onSuccess={handleLogin} />
      <a href="" value="Register here" onClick={handleRegisterClick}>
        Not registered yet?
      </a>
    </div>
  );
};

export default Login;
