```css
<style>
    .color-red{
        background: red;
    }
</style>
```

```html
<div id="app">
    <button v-bind:title="title">Button</button>
    <button :title="title" :class="className" >Button 2 short</button>
    <button :class="{ 'color-red' : toggleColor  }" @click="toggleColorFn">Toggle me</button>
</div>

<script>
    var app = new Vue({
        el: '#app',
        data: {
            title: 'Title attribute',
            className: 'my-class',
            toggleColor: false
        },
        methods:{
            toggleColorFn(){
                this.toggleColor = !this.toggleColor;
            }
        }
    });
</script>

```
