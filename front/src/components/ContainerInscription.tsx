import React from 'react'
import { InputRegister } from './inputs'
import { ButtonSubmit } from './buttons'

export default class ContainerInscription extends React.Component<any,any,any>{

	constructor(props:any){
		super(props)
		this.state = {
			pseudo: null,
			mail: null,
			password: null
		}
	}

	private handleChange = (event:any) => () => {
		const { name, value } = event.target
		this.setState({
			[name]:value
		})
	}

	private handleSubmit = (event:any) => {
		event.preventDefault()

		//request
		//si token stockage
		//sinon message d'erreur
	}

	render() {
		return(
			<div>
				<form submit={ this.handleSubmit }>
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
					<ButtonSubmit title={ "Inscription" }/>
				</form>
			</div>
		)
	}
}