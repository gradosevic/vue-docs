```js
        <!-- production version, optimized for size and speed -->
        <script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

```html
        <div id="app">
            @{{ message }}
        </div>
```

```javascript        
        <script>
        var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!'
            }
        });
        </script>
        
```
