//Spreading.vue
<template>
  <div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default{
  name: 'add-number',
  computed: {
    ...mapGetters({
      cart, 'cart'
    })
  },
  methods:{
    ...mapActions({
      addProduct: 'addProduct'
    }),
    addToCart(){
      this.addProduct({
        product: this.product,
        quantity: 1
      })
    }
  }
}
</script>

//Action.js
export const addProduct = ({commit, {product, quantity}}) => {
  commit('addProduct', product)
  //save to DB via API call
  //axios.post ...
}
