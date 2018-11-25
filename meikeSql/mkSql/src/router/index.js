import Vue from 'vue'
import Router from 'vue-router'
import activity from '../components/activity'
import course from '../components/course'
import video from '../components/video'
import user from '../components/user'
import member from '../components/member'
import agent from '../components/agent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/course',
      name: 'course',
      component: course
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/agent',
      name: 'agent',
      component: agent
    },
  ]
})
