import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';

Vue.use(Router);

const routes = [
	{ path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About }
];

export default new Router({
  routes
});
