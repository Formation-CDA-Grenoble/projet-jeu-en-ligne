import React from 'react';

export default class Home extends React.Component<any, any,any> {

	render() {
		localStorage.clear()

		return(
			<div>
				<p>{ "Home" }</p>
			</div>
		)
	}
}