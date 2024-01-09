import { createRouter, createWebHistory } from 'vue-router'
import ContactView from "../views/ContactView.vue"
import HomeView from "../views/HomeView.vue"
import SignupViewVue from '@/views/SignupView.vue'
import LoginViewVue from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupViewVue
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    },
  ]
})

export default router
