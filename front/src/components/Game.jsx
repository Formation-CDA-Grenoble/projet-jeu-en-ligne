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
              <Link to="/">Inscription</Link>
            </li>
            <li>
              <Link to="/about">Page principale</Link>
            </li>
            <li>
              <Link to="/users">Inscrpition et connexion</Link>
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
            <Inscription />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Inscription() {
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