import React from 'react'

export default (props:any) => {
	return (
		<div>
			{ props.children }
			<button onClick={ (event, link = props.redirect, confirm = false) => props.goTo(link, confirm) }>
				{ props.title }
			</button>
		</div>

	)
} 