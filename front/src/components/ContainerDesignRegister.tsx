import React from 'react'
import { RegisterMainTitle } from './texts'

export default (props:any) => {
	return (
		<div>
			<RegisterMainTitle />
			<img src={ props.image } alt="photo de jeu, présentation de l'application"/>
			<div></div>
		</div>
	)
} 
