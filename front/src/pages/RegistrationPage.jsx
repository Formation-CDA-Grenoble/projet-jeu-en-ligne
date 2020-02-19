import React from 'react';


export default class RegistrationPage extends React.Component {

  render () {
    return (
      <div>
        <h1>Plate Forme de Jeu</h1>
        <form>
        <ul>
          <li>name</li>
          <li>email</li>
          <li>description</li>
          <li>password</li>
          <button>cancel</button>
          <button>submit</button>
        </ul>        
        <input type="text"placeholder="Ajouter un joueur" />
        <button>Ajouter</button>
        </form>
      </div>
    );
  }
}

