import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Test from "./components/Test"

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bar-chart">Bar Chart</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <div>Home page</div>
          </Route>
          <Route exact path="/bar-chart">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
