import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Resume from '../views/Resume.vue'
import Illustrations from '../views/Illustrations.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path:'/resume',
    name:'Resume',
    component:Resume
  }
  ,
  {
    path:'/blog/:id',
    name:'Blog',
    component:Blog,
    
  },
  {
    path:"/illustrations",
    name:'Illustrations',
    component:Illustrations,
    
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
