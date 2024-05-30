import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Route path="/register" component={Register} /> {/* Render Register component */}
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
};

export default App;
