import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router) 

export default new Router({
  routes:[
    { // 登陆
      path: '/login',
      name: 'login',
      component: () => import('../src/components/HomePage.vue')
    },
    { // 重定向
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HomePage',
      component: () => import('../src/components/HomePage.vue'),
      children: [
        {
          path: 'upload',
          name: 'UploadPage',
          component: () => import('../src/components/music/UploadPage.vue')
        },
      
      ]
    }
  ]
})
