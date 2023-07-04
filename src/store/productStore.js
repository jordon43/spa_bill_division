

export default {
    namespaced: true,
    state() {
        return{
            products: [],
        }
    },

    getters:{
      getProducts: state => {
          return state.products
      }
    },

    mutations:{
        ADD(state, {name, durability, buyers}){
            state.products.push({id: state.products.length, name: name, durability: durability, buyers: buyers})
        }
    },
    actions: {
        addProduct({commit}, payload) {
            commit('ADD', payload);
        },
    }
}