```html
<div id="app">
    <ul>
        <li v-for="task in incompleteTasks" v-text="task.name"></li>
    </ul>
</div>

<script>
    var app = new Vue({
        el: '#app',
        data: {
            tasks: [
                {'name' : 'Task 1', completed: true},
                {'name' : 'Task 2', completed: false},
                {'name' : 'Task 3', completed: true},
                {'name' : 'Task 4', completed: false},
            ]
        },
        computed: {
          incompleteTasks(){
             return this.tasks.filter(task => !task.completed);
           }
        }
    });
</script>
```
