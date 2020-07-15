import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Register = () => {
  const history = useHistory();

  const handleRegister = (data) => {
    console.log(data);
  };
  const handleBackToLoginClick = () => {
    history.push('/');
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label>Email</label>
        <br />
        <input type='email' name='email' />

        <label>Name</label>
        <br />
        <input type='text' name='name' />

        <label>Sex</label>
        <br />
        <input type='text' name='name' />

        <label>
          Birthday
          <input type='date' name='birthDate' />
        </label>
        <br />
        <label>
          Password
          <input type='password' name='password' />
        </label>
        <input type='submit' value='Register' />
        <input type='button' value='Back to login' onClick={handleBackToLoginClick} />
      </form>
    </div>
  );
};

export default Register;
