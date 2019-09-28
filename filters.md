```html
<template>
    <div class="container">
        {{date | formatDate}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                date: "04.15.2019."
            }
        },
        filters: {
            formatDate(date){
               return (new Date(date)).toDateString();
            }
        }
    }
</script>
```
