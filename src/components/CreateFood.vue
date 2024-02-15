<script>
import {mapActions, mapState} from "vuex";
import router from "../router.js";

export default {
    data(){
        return{
            name_product: "",
            durability_product: "",
            buyers: [],
            result: 0,
            error: false,
            error_durability: false
        }
    },
    computed: {
        ...mapState('productStore', {
            products: state => state.products,
        }),
        ...mapState('personStore', {
            persons: state => state.persons,
        }),
    },
    methods:{
        router() {
            return router
        },
        ...mapActions('productStore', ['addProduct']),
        add(){
            if(this.buyers.length === 0){
                this.error = true
            }
            if( isNaN(Number(this.durability_product))){
                this.error_durability = true
            }
            if (this.name_product !== "" && this.durability_product !== "" && !isNaN(Number(this.durability_product)) && this.buyers.length !== 0){
                this.addProduct({name: this.name_product, durability: this.durability_product, buyers: this.buyers});
                this.result_durability()
                this.error = false
                this.error_durability = false
            }
        },
        result_durability(){
            this.products.forEach((obj)=>{
                this.result += Number(obj.durability);
            })
        }
    },
    mounted() {
        this.result_durability();
    },
}

</script>

<template>
    <div class="title">
        <h1>Список продуктов</h1>
    </div>
    <div class="add-products">
        <div class="block-product">
            <form action="" onsubmit="return false">
            <div class="inputs-products">
                <div class="input-group mb-3">
                    <span class="input-group-text">Название продукта</span>
                    <input type="text"
                           :value="name_product"
                           @input="name_product = $event.target.value"
                           class="name_product form-control"
                           placeholder="Введите название продукта"
                            required>
                </div>

                <div class="input-group">
                    <span class="input-group-text">Стоимость продукта</span>
                    <input type="text"
                           :value="durability_product"
                           @input="durability_product = $event.target.value"
                           class="name_product form-control"
                           placeholder="Введите стоймость продукта"
                           required>
                </div>
                <div class="error" v-if="error_durability">
                    Введите число
                </div>
            </div>
            <div class="check-person">
                <p class="title-eat">Выберите тех кто будет оплачивать продукт:</p>
                <div class="form-check">
                    <div class="person" v-for="person in persons" :key="person.id">
                            <input type="checkbox"
                                   :value="person.id"
                                   class="name_person form-check-input"
                                   v-model="this.buyers"
                                   :id="('name_person')+person.id"
                                   >
                            <label :for="('name_person')+person.id" class="form-check-label">{{person.name}}</label>
                    </div>
                    <div class="error" v-if="error">
                        Выберите или добавьте того(тех) кто будет оплачивать продукт
                    </div>
                </div>
            </div>
            <button @click="add" type="submit" class="btn btn-dark">Добавить продукт</button>
            </form>
        </div>
    </div>
    <div class="list-products">
        <div class="product" v-for="product in products">
            <span>За продукт <i>{{product.name}}</i></span>
            <span> с ценой <i>{{product.durability}}</i> платили: </span>
            <span v-for="buyer in product.buyers"> <i>{{persons[buyer].name}}</i>; </span>
        </div>

    </div>
    <div class="">
        <p>Промежуточный итог: {{result}}</p>
    </div>
    <button type="button" class="btn btn-dark" @click="router().push('/takeResult')">Далее</button>
</template>

<style scoped lang="sass">
.add-products
    border: #1a1a1a 1px solid
    border-radius: 5px
    margin: 0 25%
    .block-product
        padding: 30px
    .title-eat
        padding: 5px
        margin: 0
    .check-person
        padding: 10px
        .form-check
            input
                float: inherit
            label
                padding-left: 10px
                text-align: var(--bs-body-text-align)
    button
        padding: 5px 10px
        margin-top: 5px

.title
    padding: 40px

.list-products
    padding: 20px

.error
    color: brown

@media screen and (max-width: 1023px)
  .title
    padding: 20px !important

  h1
    font-size: 30px

  p
    padding: 0 2% 10px 2%

  button
    margin-top: 10px !important
    width: 200px !important

  .add-products
    margin: 0 5%
    .block-product
      padding: 15px
    .input-group
      input
        width: 100% !important
      .input-group-text
        margin: 0 auto
        border: none
        background-color: #ffffff

</style>