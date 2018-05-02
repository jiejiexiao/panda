import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import pandaComponent from '../components/panda/panda.vue'

import loginComponent from '../components/login/login.vue'
import registerComponent from '../components/register/register.vue'
import ownerComponent from '../components/panda/owner/owner.vue'

import homeComponent from '../components/panda/home/home.vue'
import recommendComponent from '../components/panda/home/recommend/recommend.vue'
import womenComponent from '../components/panda/home/women/women.vue'
import BeautySkinCareComponent from '../components/panda/home/BeautySkinCare/BeautySkinCare.vue'
import menComponent from '../components/panda/home/men/men.vue'

const router = new VueRouter({
    routes: [
        {path:'/login', component: loginComponent, name: 'login' },
        {path:'/register', component: registerComponent, name: 'register' },
        {path:'/', component: pandaComponent, name: 'panda',children:[
            {path:'owner', component: ownerComponent, name: 'owner'},
            {path:'/', component: homeComponent, name: 'home', children:[
                {path:'/', component: recommendComponent, name: 'recommend'},
                {path:'women', component: womenComponent, name: 'women'},
                {path:'BeautySkinCare', component: BeautySkinCareComponent, name: 'BeautySkinCare'},
                {path:'men', component: menComponent, name: 'men'},
            ]}
        ] }

    ]
})

export default router;

