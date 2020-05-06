<template>
  <div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default{
  name: 'add-number',
  methods:{
    ...mapActions({
      addProduct: 'addProduct'
    })
  }
}
</script>
