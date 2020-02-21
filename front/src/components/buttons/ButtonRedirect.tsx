import React from 'react';
import image from "../../images/icon-arrow-redirect.png"

export default (props:any) => {
	return (
		<div>
			{ props.children }
			<button onClick={ (event, link = props.redirect, confirm = false) => props.goTo(link, confirm) }>
				{ props.title }
				<img src={ image } alt="icon de button" />
			</button>

		</div>

	)
} 