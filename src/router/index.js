import Vue from 'vue'
<<<<<<< HEAD
import Router from 'vue-router'
import Meta from 'vue-meta'
import routes from '@/router/routes'
import { store } from '@/store'
import { checkIfTokenNeedsRefresh } from '@/utils/utils.js'
import { checkForUpdates } from '@/utils/updates.js'
import * as types from '@/store/mutation-types'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes]
})

router.beforeEach((to, from, next) => {
  checkForUpdates()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isTokenSet = store.getters.isTokenSet
  if (requiresAuth && !isTokenSet) {
    return next('/login')
  }
  checkIfTokenNeedsRefresh()
  store.commit(types.SUCCESS, null)
  store.commit(types.ERROR, null)
  return next()
})

export default router
=======
// import store from '@/store'
import Router from 'vue-router'
import Home from '@/components/Home'
import Identifikasi from '@/components/Identifikasi'
import Tentang from '@/components/Tentang'
import Tentang_pakar from '@/components/Tentang_pakar'
import Kontak from '@/components/Kontak'


Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/identifikasi',
      name: 'identifikasi',
      component: Identifikasi
    },
    {
      path: '/tentang',
      name: 'tentang',
      component: Tentang
    },
    {
      path: '/tentang_pakar',
      name: 'tentang_pakar',
      component: Tentang_pakar
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: Kontak
    },

  ]
})

router.beforeEach((to, from, next) => {
//   next(
//     (to.meta.guarded && store.state.token === '') ? {name: 'login'} : true
//   )
    next(true)
})

export default router
>>>>>>> 5b9e5c9ea9fb65783ef3c483c30ff5e5dca8366b
