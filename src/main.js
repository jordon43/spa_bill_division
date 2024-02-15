import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'
import router from './router.js';
import store from "./store/store.js";
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';


createApp(App)
    .use(store)
    .use(router)
    .component('BootstrapIcon', BootstrapIcon)
    .mount('#app')
