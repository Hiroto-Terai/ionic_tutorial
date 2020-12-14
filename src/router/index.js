import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
// import Home from '@/views/Home.vue'
import Home from '../views/Home.vue';
import Page2 from '../views/Page2.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
