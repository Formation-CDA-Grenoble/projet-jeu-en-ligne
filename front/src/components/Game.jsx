import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegistrationPage from '../pages/RegistrationPage';
import ListPlayers from './ListPlayers'; 
import ListParties from './ListParties';
import LoginPage from '../pages/LoginPage'; 


export default function Game() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2><RegistrationPage/></h2>;
}

function About() {
  return <h2> 
            <ListPlayers/>
            <ListParties/>
        </h2>;
}

function Users() {
  return <h2><LoginPage/>
  </h2>;
}