import { createRouter, createWebHistory } from "vue-router";

const routes = [

    {
        path: '/login',
        component: Login
    },
    { path: '/signup', component: Signup }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;