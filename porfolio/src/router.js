import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Projects from './views/Projects.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/github',
      name: 'github'
    },
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    }
  ]
});
