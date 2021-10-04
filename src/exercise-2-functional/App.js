import React, { useState } from 'react'
import { INITIAL_CONTACTS } from './data'
import ContactList from './ContactList'

export default function App() {
	return (
		<div className="container mt-5">
			<ContactList />
		</div>
	)
}

