<template>
  <div class="sum">
    {{number}}
    {{sum}}
  </div>
  <ul>
    <li v-for="num in numbers">{{num}}</li>
  </ul>
</template>
<script>
export default{
  name: "sum",
  computed:{
    number(){
      return this.$store.getters.number
    },
    numbers(){
      return this.$store.getters.numbers
    },
    sum(){
      return this.$store.getters.sum
    }
  }
}
</script>
