import Vue from 'vue'
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