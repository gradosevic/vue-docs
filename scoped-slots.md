### When to use?
When you want the template inside of slot access the data from the child component hosting the slot content
Definition: A scoped slot is a special type of slot that functions as a reusable template (that can be passed data to) instead of already-rendered-elements.

# Example 1

```html
// Component: List
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <slot
        name="item"
        :item="item"
        :remove="removeItem"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },

  methods: {
    removeItem(id) {
      // ... handle item removal
    }
  }
}
</script>
```

```html
// Parent
<template>
  <List :items="items">
    <template v-slot:item="{ item, remove }">
      {{ item.name }}
      <button
        type="button"
        @click="remove(item.id)"
      >Delete</button>
    </template>
  </List>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: '1',
          name: 'Trys'
        }
      ]
    }
  }
}
</script>
```

# Example 2

## Parent
```html
<template>
	<child-component>
		<template slot-scope="{childData}">
			<another-component :childData={childData}></another-component>
		</template>
	</child-component>
</template>
```

## Child
```html
<template>
	<slot :childData={childData}></slot>
</template>
```

# Example 3
```html
<renderless-component>
	<p>regular content</p>
</renderless-component>

<script>
//Scoped slots
export default{
	render(){
		return this.$scopedSlots.default({
			items: this.value
		});
	}
}
</script>

<example-component>
	<div slot-scope="{items: aliasItems}">
</example-component>
```
