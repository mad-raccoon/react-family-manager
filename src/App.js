import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, RegisterPage, FamilyPage } from './components/pages';
import { useAuth } from './shared/hooks';
import './App.css';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  debugger;
  return (
    <Route
      {...rest}
      render={(props) => (user.email ? <Component {...props} /> : <Redirect to='/login' />)}
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {/* <Switch> */}
      <PrivateRoute path='/family' component={FamilyPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/' component={LoginPage} />

      {/* <Route exact path='/login' component={LoginPage} />
        <PrivateRoute exact path='/register' component={RegisterPage} />
        <PrivateRoute exact path='/family' component={FamilyPage} /> */}
      {/* </Switch> */}
    </BrowserRouter>
  );
};

export default App;
