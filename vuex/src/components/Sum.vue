<template>
  <div>
    <div class="sum">
      {{number}}
      {{sum}}
    </div>
    <ul>
      <li v-for="num in numbers">{{num}}</li>
    </ul>
    <add-number></add-number>
  </div>
</template>
<script>
import AddNumber from './AddNumber'
export default{
  name: "sum",
  components:{
    AddNumber
  },
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
