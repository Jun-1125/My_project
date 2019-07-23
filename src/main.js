import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import './mockData/mockServer'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* components: { App },
  template: '<App/>' */
  render: h => h(App),
  router,
  store
})
