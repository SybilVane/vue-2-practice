import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: App },
  { path: '/about', component: HelloWorld }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
