<template>
  <div>
    <a href="#" @click.prevent="add">Add Random Number</a>
  </div>
</template>
<script>
export default{
  name: 'add-number',
  methods:{
    add(){
      this.$store.commit('addNumber', Math.floor(Math.random() * (100 - 1) + 1))
    },
    add2(){
      this.$store.commit('addNumber2', {
        min: 1,
        max: 100
      })
    },
    addWithAction(){
      this.$store.dispatch('fetchNumber', {
        min: 1, 
        max: 100
      })
    }
  }
}
</script>
