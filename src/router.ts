import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Map from './views/Map.vue';
import AfterParty from './views/AfterParty.vue';
import UberWiz from './views/UberWizard.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/timeline',
      name: 'timeline',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Timeline.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Menu.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
    },
    {
      path: '/afterparty',
      name: 'afterparty',
      component: AfterParty,
    },
    {
      path: '/uber',
      name: 'uber',
      component: UberWiz,
    },
  ],
});
