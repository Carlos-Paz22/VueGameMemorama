import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Carros from '../views/Carros/Carros.vue'
import SwalFire from '../views/SwalFire.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home
    },
    {

        path: '/',
        name: 'carros',
        component: Carros
    },

    {
        path: '/prueba',
        name: 'Prueba',
        component: SwalFire
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router