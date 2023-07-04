<script>
import {mapState} from "vuex";
export default {
    data(){
        return{
            result_food_bill: []
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
    mounted() {
        this.result();
    },
    methods: {
        result(){
            console.log(this.result_food_bill)
            this.persons.forEach(({name}) => {
                this.result_food_bill.push({name: name, price: 0})
            })
            this.products.forEach(({id, name, durability, buyers}) => {
                buyers.forEach((i) => {
                    let price = 0;
                    price = durability / buyers.length;
                    this.result_food_bill[i].price += price;
                });
            });
        }
    },
}
</script>

<template>
  <div class="result-block">
      <h1 class="title">Результаты</h1>
      <div class="person-results" v-for="person in result_food_bill">
          <p><i>{{person.name }}</i> должен заплатить <i>{{ person.price }}</i></p>
      </div>
  </div>
</template>

<style scoped lang="sass">
.title
  padding: 30px
</style>