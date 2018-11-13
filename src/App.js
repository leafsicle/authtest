import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Callback from './pages/Callback'

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/callback" exact component={Callback} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App
