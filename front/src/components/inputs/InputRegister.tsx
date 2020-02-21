import React from 'react'

import './styles/inputRegister.css'

export default (props:any) => {
	return (
		<div className="input-register">
			<input type={ props.type } name={ props.name } value={ props.value } onChange={ props.onChange }
			placeholder={ props.placeholder }/>
			<img src={ props.icon } alt="icon de l'input" />
		</div>
 
	)
} 