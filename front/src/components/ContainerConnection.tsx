import React from 'react'
import { InputRegister } from './inputs'
import { ButtonSubmit } from './buttons'
import Axios from 'axios'
import { URL_SERVER } from '../constants'

export default class ContainerInscription extends React.Component<any,any,any>{

	constructor(props:any){
		super(props)
		this.state = {
			value: {
				pseudo: "",
				email: "",
				password: ""
			},
			loading:false

		}
	}

	private handleChange = (event:any) => {
		const { name, value } = event.target
		this.setState({
			value: {
				...this.state.value,
				[name]:value
			}
		})
	}

	private postInscription = () => {
		this.setState({
			loading: true
		})
		let data:any = {
			...this.state.value,
			status: 1
		}
		Axios.post(URL_SERVER+"/users", data).then((res) => {
			console.log(res)
			//this.goTo("connexion", true)
		}).catch(err => {
			console.log(err)
		}).finally(() =>{
			this.setState({
				loading: false
			})
		})
	}

	private handleSubmit = (event:any) => {
		event.preventDefault()
		this.postInscription()
		//sinon message d'erreur
	}



	render() {
		console.log(this.state)
		return(
			<div>
				<div className="register-title">
					<p>{ "Rejoignez-nous," }</p>
					<p>{ "connectez-vous !" }</p>
				</div>
				<form onSubmit={ this.handleSubmit }>
					<InputRegister
						type={ "text" }
						name={ "pseudo" }
						placeholder={ "Identifiant" }
						onChange={ this.handleChange }
						value={ this.state.pseudo }/>
					<InputRegister
						type={ "email" }
						name={ "email" }
						placeholder={ "E-mail" }
						onChange={ this.handleChange }
						value={ this.state.mail }/>
					<InputRegister
						type={ "password" }
						name={ "password" }
						placeholder={ "Mot de passe" }
						onChange={ this.handleChange }
						value={ this.state.password }/>
					{ this.state.loading? <p>Inscription en cours...</p> 
					:<ButtonSubmit title={ "Inscription" }/> }
				</form>
			</div>
		)
	}
}