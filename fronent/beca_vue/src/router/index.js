import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import About from '../views/About.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
    {path: '/', name: 'Home', component: HomeView},
    {path: '/about', name: 'About', component: About},
    {path: '/dashboard', name: 'Dashboard', component: Dashboard}
]

// router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router