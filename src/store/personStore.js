const Person = (id, name) => ({id, name})

export default {
    namespaced: true,
    state() {
        return{
            persons: [],
        }
    },

    getters:{
      getPersons: state => {
          return state.persons
      }
    },

    mutations:{
        ADD(state, name){
            state.persons.push({id: state.persons.length, name: name })
        }
    },
    actions: {
        addPerson({commit}, payload) {
            commit('ADD', payload);
        },
    }
}