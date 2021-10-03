import React from 'react'
import Contact from './Contact'

export default function App() {
	
	const contact = {
		firstName: "Chidi",
		lastName: "Anagonye",
		phone: "555-366-8987",
		address: "St. John's University, Sydney, Australia"
	}

	return (
		<div className="container">
			<Contact />
		</div>
	)
}

