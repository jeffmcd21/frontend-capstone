import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Logout from '../components/Logout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'home', component: HomeView
    },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'Signup', component: Signup },
    { path: '/logout', name: 'Logout', component: Logout },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/menus',
      name: 'menus',
      component: () => import('../views/MenusView.vue')
    },
    {
      path: '/drinks',
      name: 'drinks',
      component: () => import('../views/DrinksView.vue')
    },
    {
      path: '/appitizers',
      name: 'appitizers',
      component: () => import('../views/AppsView.vue')
    },
    {
      path: '/pasta',
      name: 'pasta',
      component: () => import('../views/PastaView.vue')
    },
    {
      path: '/pizza',
      name: 'pizza',
      component: () => import('../views/PizzaView.vue')
    }
  ]
})

export default router
