import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '@/components/pages/AuthPage.vue'
import MainPage from '@/components/pages/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage
    },
    {
      path: '/',
      name: 'main',
      component: MainPage
    }
  ]
})

export default router
