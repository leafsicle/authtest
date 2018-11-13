import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from '../Auth/auth.js'
const auth = new Auth()

class Home extends Component {
	login = () => {
		auth.login()
	}
	logout = () => {
		auth.logout()
	}
	render() {
		return (
			<div>
				<button onClick={this.login}>Log In?</button>
				<button onClick={this.login}>Logout</button>
			</div>
		)
	}
}

export default Home
