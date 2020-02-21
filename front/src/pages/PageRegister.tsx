import React from 'react';
import { ContainerInscription } from '../components';
import { ContainerConnection } from '../components';
import { Redirect } from "react-router-dom";


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
		const ComponentName:any = components[this.state.currentComponent]
		return(
			<div>
				{ ComponentName }
			</div>
		)
	}
}