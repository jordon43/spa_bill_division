<script>
import { mapState, mapActions } from 'vuex'
import router from "../router.js";

export default {
    data(){
        return{
            name_person: "",
            id: 0,
            empty: true
        }
    },
    computed: {
        ...mapState('personStore', {
            persons: state => state.persons,
        }),
    },
    methods:{
        router() {
            return router
        },
        ...mapActions('personStore', ['addPerson']),
        add(){
            if (this.name_person !== ""){
                this.addPerson(this.name_person);
                this.empty = false
            }
        }
    },

}

</script>

<template>
    <div class="title">
        <h1>Создание пользователя</h1>
    </div>
    <div class="add-person">
        <form action="" onsubmit="return false">
            <div class="input-group mb-3">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Введите имя пользователя"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    :value="name_person"
                    @input="name_person = $event.target.value"
                    required
                >
                <button @click="add"
                        class="btn btn-outline-secondary btn-add-person"
                        type="submit"
                        id="button-addon2"
                >Добавить пользователя</button>
            </div>
        </form>
    </div>
    <div class="list-persons">
        <p class="title-persons">Список пользователей:</p>
        <div class="empty" v-if="empty">
            <p>Нет пользователей</p>
        </div>
        <div class="" v-for="person in persons" :key="person.id">
            <span class="id-person"><b>Id:</b> {{person.id}}</span>
            <span class="name-person"><b>Name:</b> {{person.name}}</span>
        </div>
    </div>
    <button type="button" class="btn btn-dark next-btn" @click="router().push('/createFood')">Далее</button>
</template>

<style scoped lang="sass">
.title
    padding: 40px
.add-person
    .input-group
        padding: 0 30%
.list-persons
    .title-persons
        font-size: 30px
    .id-person
        padding-right: 10px
.next-btn
    margin: 20px

</style>