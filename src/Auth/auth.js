// src/Auth/Auth.js

import auth0 from 'auth0-js'

export default class Auth {
	auth0 = new auth0.WebAuth({
		domain: 'cookem529.auth0.com',
		clientID: '0yFqqt5WLHo5t8JCwUYzGbZ9H3MB7RHx',
		redirectUri: 'http://localhost:3000/callback',
		responseType: 'token id_token',
		scope: 'openid'
	})

	login() {
		this.auth0.authorize()
	}
}
