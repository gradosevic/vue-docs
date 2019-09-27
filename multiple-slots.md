```html
 <div id="app">
    <div>
        <div slot="header">A Sample Title</div>
        <h2 slot="footer"> Footer text </h2>
        General content
    </div>
</div>

<script>

    Vue.component('tabs', {
        template: `
            <div>
                <slot name="header"></slot>
                <slot></slot>
                <slot name="footer"></slot>
            </div>

       `
    });
    var app = new Vue({
        el: '#app'
    });
</script>
```
