import Vue from 'vue'
import App from './App'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import store from './store/chat'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

// Setup ant design
Vue.use(Antd)

// Setup socket 
export const SocketInstance = socketio('http://localhost:3200')
Vue.use(VueSocketIO, SocketInstance, store)


new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
