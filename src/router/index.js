import { createRouter, createWebHistory } from 'vue-router'
import ContactView from "../views/ContactView.vue"
import HomeView from "../views/HomeView.vue"

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
  ]
})

export default router
