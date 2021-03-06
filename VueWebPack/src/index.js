import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import ElementUI from 'element-ui';
import echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/test.css';
import './assets/images/bg.jpg';
import './assets/styles/test-stylus.styl';
import router from './router.js';
import three from 'three.js';
import utils from '../src/webglUtils.js';
import webglInterface from '../src/webglInterface.js';
import Matrix4 from '../src/webglMatrix.js';

Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.prototype.echarts = echarts ;
Vue.prototype.three = three;
Vue.prototype.utils = utils;
Vue.prototype.webglInterface = webglInterface;
Vue.prototype.Matrix4 = Matrix4;
//Vue.prototype.webgl = webgl;
console.log(three)

const root = document.createElement('div')
document.body.appendChild(root)

// new Vue({
//   el: '#app',
//   render: h => h(App)
// });
new Vue({
    router,
    render:(h)=>h(App)
}).$mount(root)