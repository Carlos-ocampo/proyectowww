import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import LoginView from '../views/LoginView.vue'
import PaisesView from '../views/PaisesView.vue'
// import About from '../views/About.vue'
// import Dashboard from '../views/Dashboard.vue'

const routes = [
    {path: '/', name: 'Home', component: HomeView},
    {path: '/login', name: 'Login', component: LoginView},
    {path: '/paises', name: 'Paises', component: PaisesView},
    // {path: '/about', name: 'About', component: About},
    // {path: '/dashboard', name: 'Dashboard', component: Dashboard}
]

// router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router