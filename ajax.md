```html
<div id="app">
    <skills>
        <li v-for="skill in skills">@{{skill}}</li>
    </skills>
</div>

<script>
    Vue.component('skills', {
        template: `
            <ul>
                <slot></slot>
            </ul>
       `
    });
    var app = new Vue({
        el: '#app',
        data(){
            return {
                skills: []
            }
        },
        mounted(){
            axios.get('/skills') //returns ['CSS', 'HTML']
                .then((result) => {
                this.skills = result.data;
            })
        }
    });
</script>
```
