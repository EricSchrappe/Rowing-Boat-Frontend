import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const VueBootstrapDatetimePicker = require('vue-bootstrap-datetimepicker');

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/src/jquery.js'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

library.add(faCalendar)
library.add(faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('date-picker', VueBootstrapDatetimePicker)

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
