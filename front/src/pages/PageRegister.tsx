import React from 'react';
import { ContainerInscription, ContainerConnection, ContainerDesignRegister } from '../components';
import { Redirect } from "react-router-dom";
import chess from '../images/chess.jpg';
import tictactoe from '../images/tic-tac-toe.jpg';

import './styles/page.css'


export default class PageRegister extends React.Component<any, any,any> {

	constructor(props:any) {
		super(props)

		this.state = {
			currentComponent: "connection",
			confirm: false,
		}
	}

	private goTo = (component:string, confirm:boolean = false) => {
		this.setState({
			currentComponent: component,
			confirm: confirm
		}) 
	}

	render() {
		const components:any = {
			"inscription": <ContainerInscription goTo={ this.goTo }/>,
			"connection": <ContainerConnection goTo={ this.goTo } confirm={ this.state.confirm }/>,
			"home": <Redirect to="/home"/>
		}

		const images:any = {
			"inscription": tictactoe, 
			"connection": chess,
			"home": null
		}
		const ComponentName:any = components[this.state.currentComponent]
		return(
			<div className="page">
				<ContainerDesignRegister image={ images[this.state.currentComponent] }/>
				{ ComponentName }
			</div> 
		)
	}
}