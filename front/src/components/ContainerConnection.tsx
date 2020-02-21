import React from 'react'
import { InputRegister } from './inputs'
import { ButtonSubmit, ButtonRedirect } from './buttons'
import Axios from 'axios'
import { URL_SERVER } from '../constants'
import { RegisterTitle } from './texts'
import iconPseudo from '../images/icon-person.png'
import iconLock from '../images/icon-lock-white.png'

import './styles/container.css'

export default class ContainerInscription extends React.Component<any,any,any>{

	constructor(props:any){
		super(props)
		this.state = {
			value: {
				email: "",
				password: ""
			},
			loading:false

		}

		this.checkToken()
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

	private checkToken = () => {
		const token:string | null = localStorage.getItem('token')
		if(token)this.props.goTo('home', false)
	}

	private saveLocalStorage = (token:string) => {
		console.log(token)
		if(token) {
			localStorage.setItem('token', token)
			this.props.goTo('home', false)
		} else {
			//message error
		}
	}

	private postConnection = () => {
		this.setState({
			loading: true
		})
		let data:any = {
			...this.state.value
		}
		Axios.post(URL_SERVER+"/login", data).then((res) => {
			this.saveLocalStorage(res.data.accessToken)

		}).catch(err => {
		}).finally(() =>{
			this.setState({
				loading: false
			})
		})
	}

	private handleSubmit = (event:any) => {
		event.preventDefault()
		this.postConnection()
		//sinon message d'erreur
	}


	render() {   
		const { value } = this.state
		return(
			<div className="container container-register">
				<RegisterTitle/>
				<form onSubmit={ this.handleSubmit }>
					<InputRegister
						type={ "email" }
						name={ "email" }
						placeholder={ "E-mail" }
						onChange={ this.handleChange }
						value={ value.mail }
						icon={ iconPseudo }/>
					<InputRegister
						type={ "password" }
						name={ "password" }
						placeholder={ "Mot de passe" }
						onChange={ this.handleChange }
						value={ value.password }
						icon={ iconLock }/>
					{ this.state.loading? <p>Connexion en cours...</p> 
					:<ButtonSubmit title={ "Connexion" }/> }
				</form> 

				<ButtonRedirect
					redirect={ "inscription" }
					title={ "Inscription" }
					goTo={ this.props.goTo }>
					<p>{ "Déjà inscrit ?" }</p>
				</ButtonRedirect>
			</div>
		)
	}
}