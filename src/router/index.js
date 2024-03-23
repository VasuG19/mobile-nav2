import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ChatBot from '../views/ChatBot.vue'
import HistoryView from '../views/HistoryView.vue'
import TeamView from '../views/TeamView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/chatbot',
      name: 'chatbot',
      component: ChatBot
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    }
  ]
})

export default router
