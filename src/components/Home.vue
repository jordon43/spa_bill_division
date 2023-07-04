<script>

import router from "../router.js";
import {defineComponent} from "vue";

export default defineComponent({
    methods: {
        router() {
            return router
        }
    }
})

</script>

<template>
    <h1>Приложение "Делим счет в кафе"</h1>
    <p>Приложение для деления чека/счёта на нескольких людей. Сначала
        вводятся по очереди люди, потом вводятся продукты, каждому продукту
        указывается цена и тот, кто его “использовал” (ел/пил), после чего считается
        сколько денег “потратил” каждый человек.
    </p>
    <button type="button" class="btn btn-dark next-btn" @click="router().push('/createPerson')">Перейти к созданию пользвателя</button>
</template>

<style scoped lang="sass">
h1
  padding: 30px
p
  padding: 0 10% 10px 10%
</style>