/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { useForm } from 'react-hook-forms';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../../../shared/hooks';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const defaultValues = {
  email: '',
  password: '',
};

const resolver = yupResolver(
  yup.object().shape({
    email: yup.string().email('Invalid format !').required('Required !'),
    password: yup.string().required('Required !'),
  })
);

const Login = () => {
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm({
    defaultValues,
    resolver,
  });

  const { login } = useAuth();

  const handleLogin = (values) => {
    login(values.email, values.password);
    alert('login');
  };

  const handleRegisterClick = () => {
    history.push('/register');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <label for='email'>Email</label>
        <br />
        <input type='email' name='email' ref={register} />
        <div className='error'>{errors.email && errors.email.message}</div>
        <label for='email'>Password</label>
        <br />
        <input type='password' name='password' ref={register} />
        <div className='error'>{errors.password && errors.password.message}</div>
        <input type='submit' value='Login' />
      </form>
      <a href='' value='Register here' onClick={handleRegisterClick}>
        Not registered yet?
      </a>
    </div>
  );
};

export default Login;
