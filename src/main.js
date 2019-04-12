// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
// import router from './router'
import Router from 'vue-router'
import Blogadd from './components/Blogadd'

Vue.config.productionTip = false
Vue.use(vueResource)

const routers  = new Router({
  routes :[
    {path:"/",component:Blogadd},
  ],
  mode:"history"
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  routers,
  components: { App },
  template: '<App/>'
})
