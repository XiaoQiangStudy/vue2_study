// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Nodes from './components/nodes';
import CodeBox from './components/code-box';

Vue.config.productionTip = false

Vue.component("nodes", Nodes);
Vue.component("code-box", CodeBox);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
