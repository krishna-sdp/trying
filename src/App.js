import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
    <Router>
      <Switch>
        <Route  path="/" render={() => <Home />} />
      </Switch>
    </Router>
  </React.Suspense>
  );
}

export default App;
