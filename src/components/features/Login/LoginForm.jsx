/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const defaultValues = {
  email: "user0@test.com",
  password: "user0",
};

const resolver = yupResolver(
  yup.object().shape({
    email: yup.string().email("Invalid format !").required("Required !"),
    password: yup.string().required("Required !"),
  })
);

const LoginForm = ({ onSuccess }) => {
  const { handleSubmit, register, errors } = useForm({
    defaultValues,
    resolver,
  });

  const handleLogin = (values) => {
    onSuccess(values.email, values.password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <label for="email">Email</label>
        <br />
        <input type="email" name="email" ref={register} />
        <div className="error">{errors.email && errors.email.message}</div>
        <label for="email">Password</label>
        <br />
        <input type="password" name="password" ref={register} />
        <div className="error">
          {errors.password && errors.password.message}
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
