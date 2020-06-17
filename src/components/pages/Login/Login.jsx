import React from 'react';

const Login = () => {
  const handleLogin = () => {
    // check credentials
    alert('login');
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type='email' name='email' />
        </label>
        <label>
          Password:
          <input type='password' name='password' />
        </label>
        <input type='submit' value='Login' />
      </form>
      <a href='www.google.com' value='Register here'>
        Not registered yet?
      </a>
    </div>
  );
};

export default Login;
