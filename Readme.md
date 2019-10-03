
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
    import ExampleComponent from './components/ExampleComponent';
    Vue.component('example-component', require('./components/ExampleComponent.vue').default);
    
    Vue.component('message', {
        props:[
            'title', 'body', 'show'
        ],
	props:{
	    prop1: {
	        default: 'default-value'
	    }
	},
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
        },
        filters: {
            formatDate(date){
               return (new Date(date)).toDateString();
            }
        },
        mounted(){
           console.log('do stuff when component is ready');
        },
	created(){
 	    this.escapeHandler = (e) => {
		if(e.key == 'Escape'){
			//do something
		}
	    }
	    document.addEventListener('keydown', this.escapeHandler);
	},
	destroyed(){		
	    document.removeEventlistener('keydown', this.escapeHandler);
	},
	watch: {//watches for props change 
		//watcher runs only when things are changed, not set by default
		show(show){
		    if(show){}
		}, 
		//OR object with more details
		show: {
		    immidiate: true, //trigger on the start
		    handler: function(){}
		}
	},
    });
    var app = new Vue({
        el: '#app'
        },
        components: {Comp1, 'comp-2': Comp2}
        data:{
            message: ''
    });
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

## Updating fields
```html
<script>
    this.$refs.input.value = '';
    this.$emit('input', val);
    < @input="OnImputChange">
    < @input="code = $event.target.value">
</script>
```


## Custom directive
```html
Vue.directive('tooltip', {
	bind(elem, bindings){
		new PopperTooltip(elem, {
			placement: bindings.arg,
			title: bindings.value
		});
	}
});

<p v-tooltip="Example tooltip"></p>
```

## Without template
```javascript
<script>
export default{
	render(createElement){ //we can change createElement name
		return createElement('h1', {class: 'my-class'} ,'Hello World!');
	}
}
</script>
```

## Refs
REFS are links to elements inside component: 
```html
<input ref="example">
//Access with
this.$refs.example
```

## Vue portal - move template to different place
```html
//portal-vue npm package
<portal to="modals"></portal>
<portal-target name="modals"></portal-target>
```

## V-for add key
```html
<span v-for="tag in tags" :key="tag">
```
