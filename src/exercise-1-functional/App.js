import React from 'react'
import Contact from './Contact'

export default function App() {
	
	const chidi = {
		firstName: "Chidi",
		lastName: "Anagonye",
		phone: "555-366-8987",
		address: "St. John's University, Sydney, Australia"
	}

	return (
		<div className="container mt-5">
			<div class="row">
				<Contact />
			</div>
		</div>
	)
}

