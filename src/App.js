import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import gsap from "gsap";
gsap.registerPlugin(CSSPlugin)
const C = CSSPlugin;  // here is the gotcha....
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
gsap.core.globals("CSSPlugin", CSSPlugin);

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
