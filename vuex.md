```jsx
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
window.store = new Vuex.store({
  state:{
    count: 0
  },
  mutations: {
    increment(state){
      state.count++;
    }
  }
});

//Client
<template>
  <div>{{count}}</div>
</template>
<script>
export default {
  computed(){
    count(){
      return window.store.state.count;
    } 
  },
  methods(){
    increment(){
      window.store.commit('increment');
    }
  }
}
</script>
```
