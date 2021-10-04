import React, { Component } from 'react'
import { INITIAL_CONTACTS } from './data'
import ContactList from './ContactList'

export default class App extends Component {
	render() {
		return (
			<div className="container mt-5">
				<ContactList />
			</div>
		)
	}
}
