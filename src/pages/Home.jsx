import React, { Component } from 'react'

class Home extends Component {
	state = {
		profile: {}
	}
	login = () => {
		this.props.auth.login()
	}
	logout = () => {
		this.props.auth.logout()
	}

	componentDidMount() {
		//see if the user is logged in
		//if logged in then display the user's name
		if (this.props.auth.isAuthenticated()) {
			this.props.auth.getProfile((err, profile) => {
				this.setState({ profile, err })
			})
		}
	}

	render() {
		return (
			<div>
				<h1>hello, {this.state.profile.given_name}</h1>

				<button onClick={this.login}>Log In?</button>
				<button onClick={this.logout}>Logout</button>
				<div>
					<img src={this.state.profile.picture} alt="user Profile" />
					id:{this.state.profile.sub}
				</div>
			</div>
		)
	}
}

export default Home
