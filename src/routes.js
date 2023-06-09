import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
import UpdateRes from './components/UpdateRes.vue'
import AddRes from './components/AddRes.vue'
import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        name:HomePage,
        component:HomePage,
        path:'/'
    },
    {
        name:SignUp,
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:LoginPage,
        component:LoginPage,
        path:'/login'
    },
    {
        name:UpdateRes,
        component:UpdateRes,
        path:'/update/:id'
    },
    {
        name:AddRes,
        component:AddRes,
        path:'/add'
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router
