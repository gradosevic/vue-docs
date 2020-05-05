<template>
  <div class="sum">
    {{number}}
  </div>
</template>
<script>
export default{
  name: "sum",
  computed:{
    number(){
      return this.$store.getters.number
    }
  }
}
</script>
