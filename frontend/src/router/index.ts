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
            },
            {
                path: 'role',
                component: () => import(root + 'user/Role.vue')
            },
            {
                path: 'config',
                component: () => import(root + 'user/Config.vue')
            },
            {
                path: 'reports',
                component: () => import(root + 'user/Reports.vue')
            },
            {
                path: 'profile',
                component: () => import(root + 'user/Profile.vue')
            }
        ]
    },
    {
        path: '/skinlib',
        component: () => import(root + 'skinlib/Main.vue')
    },
    {
        path: '/admin',
        component: () => import(root + 'admin/Main.vue'),
        children: [
            {
                path: '',
                component: () => import(root + 'admin/Dashboard.vue'),
            },
            {
                path: 'users',
                component: () => import(root + 'admin/Users.vue')
            },
            {
                path: 'roles',
                component: () => import(root + 'admin/Roles.vue')
            },
            {
                path: 'reports',
                component: () => import(root + 'admin/Reports.vue')
            },
            {
                path: 'customize',
                component: () => import(root + 'admin/Customize.vue')
            },
            {
                path: 'i18n',
                component: () => import(root + 'admin/I18n.vue')
            },
            {
                path: 'score',
                component: () => import(root + 'admin/Score.vue')
            },
            {
                path: 'options',
                component: () => import(root + 'admin/Options.vue')
            },
            {
                path: 'resource',
                component: () => import(root + 'admin/Resource.vue')
            },
            {
                path: 'status',
                component: () => import(root + 'admin/Status.vue')
            },
        ]
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router