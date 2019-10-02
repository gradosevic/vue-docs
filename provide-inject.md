## Parent

```html
<script>
import PRChildComponent from './PRChildComponent.vue';
export default {
    components:{PRChildComponent},
    provide: {
        itemName: 'item-name'
    }
}
</script>
<template>
    <div>
        <p-r-child-component></p-r-child-component>
    </div>
</template>
```

## Child

```html
<script>
export default {
    inject: ['itemName']
}
</script>
<template>
    <div>
        <p>Child template {{itemName}}</p>
    </div>
</template>

```
