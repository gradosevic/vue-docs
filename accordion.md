## HTML
```html
 <accordion-list>
    <accordion-list-item :item-id="1">
        <template slot="header">
            Hello world
        </template>
        <template slot="content">
            This is content
        </template>
    </accordion-list-item>
    <accordion-list-item :item-id="2">
        <template slot="header">
            Here is some heading
        </template>
        <template slot="content">
            This is some content
        </template>
    </accordion-list-item>
    <accordion-list-item :item-id="3">
        <template slot="header">
            Additional content
        </template>
        <template slot="content">
            This is additional content
        </template>
    </accordion-list-item>
</accordion-list>
```

## AccordionList.vue
```html
<script>
    export default {
        //provided variables are global, used across all components
        //give them unique names
        provide(){
            return {
                accordionListState: this.accordionListState
            }
        },
        data(){
            return {
                //
                accordionListState: {
                    activeItem: 1
                }
                //activeItem is not reactive, it's passed to child only once, se we need to use reactive state
                //activeItem: null
            }
        }
    }
</script>
<template>
    <div clas="accordion-list">
        <slot></slot>
    </div>
</template>
```

## AccordionListItem.vue

```html
<script>
    export default {
        inject: ['accordionListState'],
        props: ['itemId'],
        data(){
            return {
            }
        },
        computed:{
            showItem(){
                return this.itemId == this.accordionListState.activeItem;
            }
        },
        methods:{
            toggle(){
                this.accordionListState.activeItem = this.showItem? null: this.itemId;
            }
        }
    }
</script>
<template>
    <div class="accordion-item">
        <div class="header" @click="toggle">
            <slot name="header"></slot>
        </div>
        <div v-if="showItem && !hideItem" class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<style lang="scss">
.accordion-item{
    border: 1px solid black;
    width: 300px;
    margin: auto;
    .header{
        background: #999;
        color: white;
        width: 100%;
        text-align: center;
        cursor: pointer;
    }
}
</style>

```
