import { createRouter, createWebHistory } from 'vue-router'

// 페이지 컴포넌트들을 가져옵니다
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import Page from '../views/Page.vue'
import ListPage from '../views/ListPage.vue'

// 라우터 설정
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    },
    {
      path: '/list',
      name: 'list',
      component: ListPage
    }
  ]
})

export default router