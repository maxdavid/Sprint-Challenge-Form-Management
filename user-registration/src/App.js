import React from 'react';
import { RegisterForm } from './components';
import { useAuthToken } from './hooks';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers';
import { Foods } from './components';
import './App.scss';

function App() {
  const [authToken, setAuthToken] = useAuthToken();

  return (
    <div className='App'>
      <Redirect to='/register' />
      <Route
        exact
        path='/register'
        render={props => (
          <RegisterForm {...props} setAuthToken={setAuthToken} />
        )}
      />
      <PrivateRoute exact path='/foods' component={Foods} />
    </div>
  );
}

export default App;
