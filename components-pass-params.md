```html
 <div id="app">
    <message title="Hello World" body="Body message"></message>
</div>

<script>
    Vue.component('message', {
        props:[
            'title', 'body'
        ],
       template: `
            <article v-show="showMessage">
                <h2>@{{ title }}</h2>
                <p>@{{ body }}</p>
                <button @click="hideMessage">x</button>
                <button @click="showMessage = false">x</button>
            </article>
       `,
        data(){
            return {
                showMessage: true
            }
        },
        methods:{
            hideMessage(){
                this.showMessage = false;
            }
        }
    });
    var app = new Vue({
        el: '#app'
    });
</script>
```
