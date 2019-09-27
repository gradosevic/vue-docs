
## Include scripts
```html
<!-- DEVELOPMENT -->
<script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>

<!-- PRODUCTION -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

<!-- OR BETTER SPECIFIC -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.0"></script>

<!-- OTHER --> 
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css" rel="stylesheet">
```

## Example app and component
```html
<script>
    Vue.component('message', {
        props:[
            'title', 'body'
        ],
       template: `
           
       `,
        data(){
            return {
                message: true
            }
        },
        methods:{
            hideMessage(){
                
            }
        }
    });
    var app = new Vue({
        el: '#app'
    },
    data:{
        message: ''
    },);
</script>
```

## Prevent form submition
```html
<form @submit.prevent="onSubmit">
```

## Clear form fields on keydown
```html
<form @keydown="errors.clear($event.target.name)"
```
