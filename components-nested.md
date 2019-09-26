```html
 <div id="app">
    <task-list>
        <task>aaaa</task>
        <task>bbb</task>
    </task-list>
</div>

<script>
    Vue.component('task', {
        template: '<li><slot></slot></li>',
        data(){
            return {
                message: 'Using data as fn in component'
            }
        }
    });
    Vue.component('task-list', {
       template: `
            <ul><slot></slot></ul>
       `,
        data(){
                return {
                    tasks:[
                    'task1', 'task2', 'task3'
                ]
            }
        }
    });
    var app = new Vue({
        el: '#app'
    });
</script>
```
