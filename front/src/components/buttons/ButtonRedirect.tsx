import React from 'react'

export default (props:any) => {
	return (
		<div>
			<p>{ props.text }</p>
			<button onClick={ (event, link = props.redirect, confirm = false) => props.goTo(link, confirm) }>
				{ props.title }
			</button>
		</div>

	)
} 