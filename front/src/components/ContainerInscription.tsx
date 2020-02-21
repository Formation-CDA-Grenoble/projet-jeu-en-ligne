import React from 'react'
import { InputRegister } from './inputs'

export default class ContainerInscription extends React.Component<any,any,any>{
	render() {
		return(
			<div>
				<InputRegister
					type={ "text" }
					name={ "pseudo" }
					placeholder={ "Identifiant" }
					onChange={ this.handleChange }
					value={ this.state.pseudo }/>
				<InputRegister
					type={ "email" }
					name={ "mail" }
					placeholder={ "E-mail" }
					onChange={ this.handleChange }
					value={ this.state.mail }/>
				<InputRegister
					type={ "password" }
					name={ "password" }
					placeholder={ "Mot de passe" }
					onChange={ this.handleChange }
					value={ this.state.password }/>

			</div>
		)
	}
}

{
		type: "text",
		placeholder: "Identifiant",
		name: "pseudo"
	},
	{
		type: "email",
		placeholder: "E-mail",
		name: "mail"
	},
	{
		type: "password",
		placeholder: "Mot de passe",
		name: "password"
	},
]