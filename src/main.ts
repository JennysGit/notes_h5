import Vue from 'vue';
import './cube-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'amfe-flexible';
import './assets/style/index.styl';
import moment from 'moment'

Vue.config.productionTip = false;
Vue.filter('datetime', (value: any) => {
    return moment(value).format('YYYY-MM-DD HH:mm:ss')
})

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
