import React from 'react'
import { RegisterMainTitle } from './texts'

import './styles/container.css'

export default (props:any) => {
	return (
		<div className="container container-design">
			<RegisterMainTitle />
			<img className="design-img" src={ props.image } alt="jeu présentation de l'application"/>
			<div></div>
		</div>  
	)    
}  
 