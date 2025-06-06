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
      path: '/incomes',
      name: 'incomes',
      component: () => import('../views/IncomesPageView.vue'),
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: () => import('../views/ExpensesPageView.vue'),
    },
    {
      path: '/savings',
      name: 'savings',
      component: () => import('../views/SavingsPageView.vue'),
    },
    {
      path: '/investment',
      name: 'investment',
      component: () => import('../views/InvestmentPageView.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsPageView.vue'),
    }
  ],
})

export default router
