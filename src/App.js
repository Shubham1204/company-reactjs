import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <div>
      Learn React
      <Router>
      <Route path="/" ><Login /></Route>
      <Route path="/main"><Dashboard /></Route>
      </Router>
    </div>
  );
}

export default App;
