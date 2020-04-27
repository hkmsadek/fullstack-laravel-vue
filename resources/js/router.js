
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
import firstPage from './components/pages/myFirstVuePage'
import newRoutePage from './components/pages/newRoutePage'
import hooks from './components/pages/basic/hooks.vue'
import methods from './components/pages/basic/methods.vue'
import usecom from './vuex/usecom'
// admin project pages 
import home from './components/pages/home'
import tags from './admin/pages/tags'
import category from './admin/pages/category'
import adminusers from './admin/pages/adminusers'
import login from './admin/pages/login'





const routes = [
    //projects routes....

    {
        path: '/testvuex', 
        component: usecom, 
       
    },
    {
        path: '/', 
        component: home, 
       
    },


    {
        path: '/tags', 
        component: tags, 
       
    },
    {
        path: '/category', 
        component: category, 
       
    },
    {
        path: '/adminusers', 
        component: adminusers, 
       
    },
    {
        path: '/login', 
        component: login, 
       
    },



    
    {
        path: '/my-new-vue-route', 
        component: firstPage, 
       
    },


    /// basic tutorials routes... 
    {
        path: '/my-new-vue-route', 
        component: firstPage, 
       
    },
    {
        path: '/new-route', 
        component: newRoutePage
    },

    // vue hooks 
    {
        path: '/hooks', 
        component: hooks
    },
    // more basics 
    {
        path: '/methods', 
        component: methods
    },


]



export default new Router({
    mode: 'history', 
    routes

})