```html
<div id="app">
    <tabs>
        <div slot="header">Wrapped in div</div>
        <template slot="header">Not Wrapped when used template</template>
        Not wrapped
        <h2 slot="footer"> Wrapped in footer </h2>
    </tabs>
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
