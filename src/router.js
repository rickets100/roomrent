import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Explore from './views/Explore.vue';
import Eat from './views/Eat.vue';
import Sleep from './views/Sleep.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/eat',
      name: 'eat',
      component: Eat,
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore,
    },
    {
      path: '/sleep',
      name: 'sleep',
      component: Sleep,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
