import { Store, createStore } from 'vuex'
import personStore from "./personStore.js";
import productStore from "./productStore.js";

export default createStore({
    modules: {
        personStore,
        productStore
    }
})