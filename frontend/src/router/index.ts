//引入路由对象
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const root = '../pages/'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/auth/login',
        component: () => import(root + 'auth/Login.vue')
    },
    {
        path: '/auth/register',
        component: () => import(root + 'auth/Register.vue')
    },
    {
        path: '/auth/forgot',
        component: () => import(root + 'auth/Forgot.vue')
    },
    {
        path: '/user',
        component: () => import(root + 'user/Main.vue'),
        children: [
            {
                path: '',
                component: () => import(root + 'user/Dashboard.vue'),
            },
            {
                path: 'closet',
                component: () => import(root + 'user/Closet.vue')
            }
        ]
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router