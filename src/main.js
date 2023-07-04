import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'
import router from './router.js';
import store from "./store/store.js";

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

