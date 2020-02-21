import React from 'react'
import { InputRegister } from '.'
import { register } from '../../../datas/register'

export default (props:any) => {
	return(
		<div>
		{ register.map((input, index) => {
			return (
				<InputRegister 
						key={ `inscription${index}` } 
						type={ input.type }
						name={ input.name }
						placeholder={ input.placeholder }
						onChange={ props.onChange }
						value={ props.value }/>
				)
		}) }
		</div>
	)

	
}