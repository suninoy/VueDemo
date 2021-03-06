// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ToDoList from './ToDoList'
Vue.config.productionTip = false
// eslint-disable-next-line to ignore the next line.
/* eslint-disable */ 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { ToDoList },
  template: '<ToDoList/>'
})
