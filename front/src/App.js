import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ListPlayers from './components/ListPlayers';

function App() {
  return (
    <div className="App">
      <RegistrationPage/>
      <LoginPage/>
      <ListPlayers/>
    </div>
  );
}

export default App;
