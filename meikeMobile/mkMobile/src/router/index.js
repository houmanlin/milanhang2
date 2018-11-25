import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
// import activity from '../components/activity.vue'
import about from '../components/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    // {
    //   path: '/activity',
    //   name: 'activity',
    //   component: activity
    // }
  ]
})
