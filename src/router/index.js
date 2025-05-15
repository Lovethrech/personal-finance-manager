import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: () => import('../views/LandingPageView.vue'),
    },
    {
      path: '/assets',
      name: 'assets',
      component: () => import('../views/AssetsPageView.vue'),
    },
    {
      path: '/',
      name: 'landing-page',
      component: () => import('../views/LandingPageView.vue'),
    }
  ],
})

export default router
