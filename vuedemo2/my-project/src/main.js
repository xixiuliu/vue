import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Apple from './components/apple'
import Banana from './components/banana'
import RedApple from './components/redapple'

Vue.use(VueRouter)
//映射表
let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/apple'
		},
		{
			path: '/apple',
			component: Apple,
			children: [
				{
					path: '/red',
					component:RedApple
				}
			]
		},
		{
			path: '/banana',
			component: Banana
		}
	]
})
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
}) 
