import HomePage from './components/Home.vue'
import GettingStart from './components/GettingStart.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routers = [{
        name: 'Home',
        component: HomePage,
        path: '/',
    },
    {
        name: 'GettingStart',
        component: GettingStart,
        path: '/',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routers
})

export default router