import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginPage, RegisterPage } from './components/pages';
import { useAuth } from './shared/hooks';
import './App.css';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { authData } = UserContext();

//   return (
//     <Route
//       {...rest}
//       render={(props) => (authData.username ? <Component {...props} /> : <Redirect to='/login' />)}
//     />
//   );
// };

const App = () => {
  const { user } = useAuth();
  return (
    <Router>
      <div>
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/' component={LoginPage} />
        {/* <PrivateRoute path='/family' component={FamilyPage} /> */}
      </div>
      {user.email}
    </Router>
  );
};

export default App;
