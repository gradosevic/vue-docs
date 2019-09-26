```javascript
<div id="app">
    <ul>
        <li v-for="name in names">
            Name: @{{ name }}
        </li>
    </ul>
</div>

<script>
    var app = new Vue({
        el: '#app',
        data: {
            names: [
                'John', 'Kate', 'Tom', 'Jerry'
            ]
        }
    });
</script>
```
