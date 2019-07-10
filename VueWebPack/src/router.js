import eChartDemo from './eChartDemo.vue'
import flexPage from './flexPage.vue'
import VueRouter from 'vue-router'

const routes = [{
    path: '/echart/:Id',
    name:'echart',
    component: eChartDemo
},{
    path: '/flexPage/:Id',
    name:'flexPage',
    component: flexPage
} ]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
export default router