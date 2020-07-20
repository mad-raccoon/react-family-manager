import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const defaultValues = {
  email: null,
  name: null,
  gender: null,
  birthDate: null,
  password: null,
};

const resolver = yupResolver(
  yup.object().shape({
    email: yup.string().email("Invalid format !").required("Required !"),
    name: yup.string().required("Required !"),
    gender: yup.string().required("Required !"),
    birthday: yup.date().required("Required !"),
    password: yup.string().required("Required !"),
  })
);

const RegisterForm = ({ onSuccess }) => {
  const { handleSubmit, errors, register } = useForm({
    defaultValues,
    resolver,
  });

  const onSubmit = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <br />
      <input type="email" name="email" ref={register} />
      <div className="error">{errors.email && errors.email.message}</div>

      <label>Name</label>
      <br />
      <input type="text" name="name" ref={register} />
      <div className="error">{errors.name && errors.name.message}</div>

      <label>Gender</label>
      <br />
      <input type="text" name="gender" ref={register} />
      <div className="error">{errors.gender && errors.gender.message}</div>

      <label>Birthday</label>
      <br />
      <input type="date" name="birthDate" ref={register} />
      <div className="error">{errors.birthday && errors.birthday.message}</div>

      <label>Password</label>
      <br />
      <input type="password" name="password" ref={register} />
      <div className="error">{errors.password && errors.password.message}</div>
      <input type="submit" value="Register" />
    </form>
  );
};

export default RegisterForm;
