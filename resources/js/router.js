import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import firstPage from './components/pages/myFirstVuePage'
import newRoutePage from './components/pages/newRoutePage'
import hooks from './components/pages/basic/hooks.vue'
import methods from './components/pages/basic/methods.vue'

// project pages 
import home from './components/pages/home'
import tags from './components/pages/tags'


const routes = [
    //projects routes....

    {
        path: '/', 
        component: home, 
       
    },
    {
        path: '/tags', 
        component: tags, 
       
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