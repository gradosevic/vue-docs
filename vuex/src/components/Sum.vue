<template>
  <div class="sum">
    {{number}}
    {{sum}}
  </div>
</template>
<script>
export default{
  name: "sum",
  computed:{
    number(){
      return this.$store.getters.number
    },
    sum(){
      return this.$store.getters.sum
    }
  }
}
</script>
