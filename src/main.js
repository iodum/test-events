import Vue from 'vue'
import axios from 'axios';
import moment from 'moment';
import Notifications from 'vue-notification';

import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
axios.defaults.withCredentials = false

Vue.use(Notifications)
moment.locale('ru');

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
