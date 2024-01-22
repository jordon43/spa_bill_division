import { createRouter, createWebHashHistory } from 'vue-router';
import CreatePerson from "./components/CreatePerson.vue";
import CreateFood from "./components/CreateFood.vue";
import TakeResult from "./components/TakeResult.vue"
import Home from "./components/Home.vue";


const routes = [
    { path: '/createPerson', component: CreatePerson, name: "1" },
    { path: '/createFood', component: CreateFood, name: "2" },
    { path: '/takeResult', component: TakeResult, name: "3" },
    { path: '/', component: Home, name: "4"}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router