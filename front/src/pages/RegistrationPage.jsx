import React from 'react';


export default class RegistrationPage extends React.Component {

  render () {
    return (
      <div>
        <h1>Plate Forme de Jeu</h1>
        <form submit={ this.handleSubmit }>
          <label for="fname">name:</label><br/>
          <input type="text" id="fname" name="fname" value=""/><br/>
          <label for="mail">e-mail:</label><br/>
          <input type="text" id="mail" e-mail="mail" value=""/><br/>
          <label for="descript">description:</label><br/>
          <input type="text" id="descript" description="descript" value=""/><br/>
          <label for="pass">password:</label><br/>
          <input type="text" id="pass" password="pass" value=""/><br/>
          <input type="submit" value="Submit"/>
        </form> 
      </div>
    );
  }
}

