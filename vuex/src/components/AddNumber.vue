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
    }
  }
}
</script>
