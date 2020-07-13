import Vue from 'vue';
import Router, { RouterMode } from 'vue-router';

Vue.use(Router);

export const createRouter = (mode: RouterMode = 'history') => {
    return new Router({
        mode: mode,
        routes: [
            {
                path: '/',
                name: 'home',
                component: () => import('./pages/home.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('./pages/about.vue')
            },
        ]
    });
};
