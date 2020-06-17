import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import { LoginPage, FamilyPage, InfoPage } from './components/pages';
import './App.css';
import { UserContext } from './shared/contexts/userContext';

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100); // fake async
//   },
// };

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authData } = UserContext();

  return (
    <Route
      {...rest}
      render={(props) => (authData.username ? <Component {...props} /> : <Redirect to='/login' />)}
    />
  );
};

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/login'>pubic login page</Link>
          </li>
          <li>
            <Link to='/public'>pubic info page</Link>
          </li>
          <li>
            <Link to='/family'>private family page</Link>
          </li>
        </ul>

        <Route path='/public' component={InfoPage} />
        <Route path='/login' component={LoginPage} />
        <PrivateRoute path='/family' component={FamilyPage} />
      </div>
    </Router>
  );
}

export default App;
