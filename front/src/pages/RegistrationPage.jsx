import React from 'react';
import axios from 'axios';


export default class RegistrationPage extends React.Component {
  state = {
    fname:"",
    mail:"",
    pass:"",
  };

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value});
  }
  handleSubmit(event) {
    axios('' +this.state.value);
    event.preventDefault();
  }
  render () {
    console.log(this.state)
    return (
      <div>
        <h1>Plate Forme de Jeu</h1>
        <form submit={ this.handleSubmit }>
          <label for="fname">name:</label><br/>
          <input type="text" id="fname" name="fname" value={ this.state.fname } onChange={ this.handleChange }/><br/>
          <label for="mail">e-mail:</label><br/>
          <input type="text" id="descript" name= "descript" value={ this.state.descript } onChange={ this.handleChange }/><br/>
          <label for="pass">password:</label><br/>
          <input type="text" id="pass" name="pass" value={ this.state.pass } onChange={ this.handleChange }/><br/>
          <input type="submit" value="Submit"/>
        </form> 
      </div>
    );
  }
}

