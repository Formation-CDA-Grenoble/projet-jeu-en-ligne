import React from 'react'
import { ContainerInscription } from '../components'



export default class PageRegister extends React.Component<any, any,any> {



	render() {
		return(
			<div>
				<ContainerInscription goTo={ this.goTo }/>
			</div>

		)
	}
}