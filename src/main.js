// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Router from './Router'

Vue.config.productionTip = false
Vue.use(vueResource);
Vue.use(VueRouter);

Vue.directive('color',{
  bind(el,binding,vnode){
    el.style.color = '#' + Math.random().toString(16).slice(2,8);
  }
})
Vue.directive('size',{
  bind(el,binding,vnode){
    if(binding.value % 2 == 0){
      el.style = 'background-color:#fff';
    }
  }
})
const router  = new VueRouter({
  routes : Router,
  mode:"history"
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router,
})
