import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isConnected: false,
		handler: '', // Such as username.
		startChat: false,
		messages: [],
		members: [],
	},

	getters: {
		getMessages (state) {
			return state.messages
		},
		getMembers (state) {
			return state.members
		},
		getHandler (state) {
			return state.handler
		},
		getStartChat (state) {
			return state.startChat
		}
	},

	mutations: {
		SOCKET_CONNECT (state) {
			state.isConnected = true
		},

		SOCKET_DISCONNECT (state) {
			state.isConnected = false
		},

		SOCKET_CHAT (state, payload) {
			console.log(payload)
			state.messages.push(payload[0])
		},

		SOCKET_REGISTER (state, payload) {
			state.members = payload[0]
		},

		setHandler (state, payload) {
			state.handler = payload
		},

		setStartChat (state, payload) {
			state.startChat = payload
		}
	},

	actions: {
		setHandler (context, payload) {
			context.commit('setHandler', payload)
		},

		setStartChat (context, payload) {
			context.commit('setStartChat', payload)
		}
	}
});