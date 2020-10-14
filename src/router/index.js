import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/vHome/index.vue';
import Contact from '@/views/vContact/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
