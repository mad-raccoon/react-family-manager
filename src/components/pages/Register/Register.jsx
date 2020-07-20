import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import RegisterForm from "../../features/Register/RegisterForm";

const Register = () => {
  const history = useHistory();

  const handleRegister = (data) => {
    console.log(data);
  };

  const handleBackToLoginClick = () => {
    history.push("/");
  };

  return (
    <div>
      <RegisterForm onSuccess={handleRegister} />
      <input
        type="button"
        value="Back to login"
        onClick={handleBackToLoginClick}
      />
    </div>
  );
};

export default Register;
