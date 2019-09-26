```javascript
<div id="app">
    <ul>
        <li v-for="name in names">
            @{{ name }}
        </li>
    </ul>
    <input type="text" v-model="input" />
    <button v-on:click="onClick">Add</button>
    <button @click="onClick">Add 2</button>
</div>

<script>
    var app = new Vue({
        el: '#app',
        data: {
            names: [
                'John', 'Kate', 'Tom', 'Jerry'
            ],
            input: ''
        },
        methods: {
            onClick(){
                this.names.push(this.input);
                this.input = '';
            }
        }
    });
</script>
```
