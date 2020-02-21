import React from 'react'

export default (props:any) => {
	return (
		<div>
			<input type={ props.type } name={ props.name } value={ props.value } onChange={ props.onChange }
			placeholder={ props.placeholder }/>
			<img src={ props.icon } alt="icon de l'input" />
		</div>

	)
} 