import React from 'react'

import './styles/buttonSubmit.css'

export default (props:any) => {
	return (
		<div className="submit-button">
			<input type={ "submit" } value={ props.title }/>
		</div>  

	)
} 