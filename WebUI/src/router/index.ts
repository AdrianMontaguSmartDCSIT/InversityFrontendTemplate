import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const CorporateView = () => import('../views/CorporateView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Homepage
      path: '/',
      alias: '/educators',
      name: 'home',
      component: HomeView,
      meta: {
        requiresRegisteredUser: true
      }
    },
    {
      // Homepage
      path: '/corporate',
      name: 'corporate',
      component: CorporateView,
      meta: {
        requiresRegisteredUser: true
      }
    }
  ]
})

export { router }
