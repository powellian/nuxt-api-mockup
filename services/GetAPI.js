console.log('GetAPI.js');

import axios from 'axios'

const getAPI = axios.create({
	// baseURL: `http://localhost:3000`,
	baseURL: `http://my-json-server.typicode.com/powellian/placeborepo `,
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})

export default {
	getApiItems() {
		return getAPI.get('/items')
	},
	getApiItem(id) {
		return getAPI.get('/items/' + id)
	}
}
