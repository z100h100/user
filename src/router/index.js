import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/test1'

import getData from './getDataPack'

Vue.use(Router)

const router = new Router({
	routes: [{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
	}, {
		path: '/test1',
		name: 'test1',
		component: test1
	}]
})



export default router;