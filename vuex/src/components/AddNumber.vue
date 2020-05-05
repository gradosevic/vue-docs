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
      this.$store.state.numbers.push(3)
    }
  }
}
</script>
