import React from 'react';


export default class LoginPage extends React.Component {

  render () {
    return (
      <div>
        <h1>PLATE FORME DE JEU EN LIGNE TIC-TAC-TOE</h1>
        <form>
        <button onClick={this.handleClick}>Inscription</button>
        <button onClick={this.handleClick}>Connexion</button>
    
        </form>
      </div>
    );
  }
}