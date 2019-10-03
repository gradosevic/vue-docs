## Pages

### Page One
```html
<script>
    export default {

    }
</script>
<template>
    <p>This is page one</p>
</template>
```
### Page Two
```html
<script>
    export default{

    }
</script>
<template>
    <p>This is page two</p>
</template>
```

## app.js
```javascript
import PageOne from './pages/PageOne.vue';
import PageTwo from './pages/PageTwo.vue';

const routes = [
    { path: '/one', component: PageOne },
    { path: '/two', component: PageTwo }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

Vue.use(VueRouter);
const app = new Vue({
    el: '#app',
    router
});
```

## Template
```html
<div id="app">
    <div class="links">
        <router-link to="/one">One</router-link>
        <router-link to="/two">Two</router-link>
    </div>
    <router-view></router-view>
</div
```
