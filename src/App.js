import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, RegisterPage, FamilyPage } from './components/pages';
import { AuthenticatedLayout, NotAuthenticatedLayout } from './components/layouts';
import { useAuth } from './shared/hooks';
import './App.css';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { user } = useAuth();
//   debugger;
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user.email ? <Component {...props} /> : <Redirect to="/" />
//       }
//     />
//   );
// };

const App = () => {
  const { user } = useAuth();

  return !user.email ? <AuthenticatedLayout /> : <NotAuthenticatedLayout />;
};

export default App;
