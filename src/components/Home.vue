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

@media screen and (max-width: 1023px)
  h1
    font-size: 30px

  p
    padding: 0 2% 10px 2%

  input
    width: 80px !important
    border-radius: 0.375rem !important
    //border-bottom-right-radius: 0 !important
    //border-bottom-left-radius: 0 !important

  button
    margin-top: 10px !important
    width: 200px !important

</style>