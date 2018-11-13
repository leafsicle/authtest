import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class Home extends Component {
	login = () => {
		this.props.auth.login()
	}
	logout = () => {
		this.props.auth.logout()
	}

	componentDidMount() {
		//see if the user is logged in
		//if logged in then display the user's name
		if (this.props.auth.isAuthenticated) {
			this.props.auth.getUserProfile()
		}
	}

	render() {
		return (
			<div>
				hello
				<button onClick={this.login}>Log In?</button>
				<button onClick={this.logout}>Logout</button>
			</div>
		)
	}
}

export default Home
