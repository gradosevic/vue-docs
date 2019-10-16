```jsx
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let store = new Vuex.store({
  state:{
    count: 0
  },
  mutations: {
    increment(state){
      state.count++;
    }
  },
  actions: {//for async operations
    increment(context){
      setTimeout(() => {
        context.commit('increment');
      }, 3000);
    }
  }
});

//Client
<template>
  <div>{{count}}</div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
export default {
  computed : mapState(['count']),
  methods(){
    increment(){
      this.store.commit('increment');
    }
  }
}
</script>

const app = new Vue({
  el: '#app',
  store
});
```
