import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from '../Auth/auth.js'

class Home extends Component {
	login = () => {
		const auth = new Auth()
		auth.login()
	}
	render() {
		return (
			<div>
				<button onClick={this.login}>Log In?</button>
			</div>
		)
	}
}

export default Home
