import React from 'react'

export default (props:any) => {
	return (
		<div>
			<input type={ props.type } name={ props.name } value={ props.value } onChange={ props.onChange }/>
		</div>

	)
} 