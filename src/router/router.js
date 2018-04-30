import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import pandaComponent from '../components/panda/panda.vue'
import loginComponent from '../components/login/login.vue'
import registerComponent from '../components/register/register.vue'
import ownerComponent from '../components/panda/owner/owner.vue'
//订单组件
import orderComponent from '../components/order/order.vue'
import allComponent from '../components/order/all/all.vue'
import toEvaluateComponent from '../components/order/toEvaluate/toEvaluate.vue'
import toPayComponent from '../components/order/toPay/toPay.vue'
import toSendComponent from '../components/order/toSend/toSend.vue'
import toReceiveComponent from '../components/order/toReceive/toReceive.vue'
//分类组件
import speciesComponent from '../components/panda/species/species.vue'
import speciesTab1 from '../components/panda/species/tab/tab1.vue'
import speciesTab2 from '../components/panda/species/tab/tab2.vue'
import speciesTab3 from '../components/panda/species/tab/tab3.vue'
import speciesTab4 from '../components/panda/species/tab/tab4.vue'


const router = new VueRouter({
    routes: [
        {path:'/login', component: loginComponent, name: 'login' },
        {path:'/register', component: registerComponent, name: 'register' },
        //订单
        {path:'/order', component: orderComponent, name: 'order',children:[
            {path:'all', component: allComponent, name: 'all'},
            {path:'/toEvaluate', component: toEvaluateComponent, name: 'toEvaluate'},
            {path:'/toPay', component: toPayComponent, name: 'toPay'},
            {path:'/toSend', component: toSendComponent, name: 'toSend'},
            {path:'/toReceive', component: toReceiveComponent, name: 'toReceive'}
        ]},
        //主组件
         {path:'/', component: pandaComponent, name: 'panda',children:[
            {path:'owner', component: ownerComponent, name: 'owner'},
            {path:'species',component:speciesComponent,name:'species',children:[
            	{path:'tab1',component:speciesTab1,name:'speciesTab1'},
            	{path:'tab2',component:speciesTab2,name:'speciesTab2'},
            	{path:'tab3',component:speciesTab3,name:'speciesTab3'},
            	{path:'tab4',component:speciesTab4,name:'speciesTab4'},
            ]}
        ] }

    ]
})

export default router;

