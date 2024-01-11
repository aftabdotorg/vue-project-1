import { createRouter, createWebHistory } from 'vue-router'
import ContactView from "../views/ContactView.vue"
import HomeView from "../views/HomeView.vue"
import SignupViewVue from '@/views/SignupView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import EventsViewVue from '@/views/EventsView.vue'
import EmitViewVue from '@/views/EmitView.vue'
import ContactDetailsViewVue from '@/views/ContactDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactView
    },
    {
      path: '/contact/:id',
      name: 'contact',
      component: ContactDetailsViewVue
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
    {
      path: '/events',
      name: 'events',
      component: EventsViewVue
    },
    {
      path: '/emits',
      name: 'emits',
      component: EmitViewVue
    },
  ]
})

export default router
